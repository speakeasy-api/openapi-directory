import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The effect to apply to the audio asset <ul>
 *
 * @remarks
 *   <li>`fadeIn` - fade volume in only</li>
 *   <li>`fadeOut` - fade volume out only</li>
 *   <li>`fadeInFadeOut` - fade volume in and out</li>
 * </ul>
 */
export declare enum AudioAssetEffectEnum {
    FadeIn = "fadeIn",
    FadeOut = "fadeOut",
    FadeInFadeOut = "fadeInFadeOut"
}
/**
 * The AudioAsset is used to add sound effects and audio at specific intervals on the timeline. The src must be a publicly accessible URL to an audio resource such  as an mp3 file.
 */
export declare class AudioAsset extends SpeakeasyBase {
    /**
     * The effect to apply to the audio asset <ul>
     *
     * @remarks
     *   <li>`fadeIn` - fade volume in only</li>
     *   <li>`fadeOut` - fade volume out only</li>
     *   <li>`fadeInFadeOut` - fade volume in and out</li>
     * </ul>
     */
    effect?: AudioAssetEffectEnum;
    /**
     * The audio source URL. The URL must be publicly accessible or include credentials.
     */
    src: string;
    /**
     * The start trim point of the audio clip, in seconds (defaults to 0). Audio will start from the in trim point. The audio will play until the file ends or the Clip length is reached.
     */
    trim?: number;
    /**
     * The type of asset - set to `audio` for audio assets.
     */
    type: string;
    /**
     * Set the volume for the audio clip between 0 and 1 where 0 is muted and 1 is full volume (defaults to 1).
     */
    volume?: number;
}
