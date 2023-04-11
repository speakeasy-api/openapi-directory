import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of license
 */
export declare enum LicenseAudioLicenseEnum {
    AudioPlatform = "audio_platform",
    PremierMusicBasic = "premier_music_basic",
    PremierMusicExtended = "premier_music_extended",
    PremierMusicPro = "premier_music_pro",
    PremierMusicComp = "premier_music_comp",
    AssetAllMusic = "asset_all_music"
}
/**
 * An audio track in a licensing request
 */
export declare class LicenseAudio extends SpeakeasyBase {
    /**
     * ID of the track being licensed
     */
    audioId: string;
    /**
     * Type of license
     */
    license?: LicenseAudioLicenseEnum;
    /**
     * ID of the search that led to this licensing event
     */
    searchId?: string;
}
