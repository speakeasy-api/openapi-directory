import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The effect to apply to the audio file <ul>
 *
 * @remarks
 *   <li>`fadeIn` - fade volume in only</li>
 *   <li>`fadeOut` - fade volume out only</li>
 *   <li>`fadeInFadeOut` - fade volume in and out</li>
 * </ul>
 */
export declare enum SoundtrackEffectEnum {
    FadeIn = "fadeIn",
    FadeOut = "fadeOut",
    FadeInFadeOut = "fadeInFadeOut"
}
/**
 * A music or audio file in mp3 format that plays for the duration of the rendered video or the length of the audio file, which ever is shortest.
 */
export declare class Soundtrack extends SpeakeasyBase {
    /**
     * The effect to apply to the audio file <ul>
     *
     * @remarks
     *   <li>`fadeIn` - fade volume in only</li>
     *   <li>`fadeOut` - fade volume out only</li>
     *   <li>`fadeInFadeOut` - fade volume in and out</li>
     * </ul>
     */
    effect?: SoundtrackEffectEnum;
    /**
     * The URL of the mp3 audio file. The URL must be publicly accessible or include credentials.
     */
    src: string;
    /**
     * Set the volume for the soundtrack between 0 and 1 where 0 is muted and 1 is full volume (defaults to 1).
     */
    volume?: number;
}
