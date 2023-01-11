import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LicenseAudioLicenseEnum {
    AudioPlatform = "audio_platform",
    PremierMusicBasic = "premier_music_basic",
    PremierMusicExtended = "premier_music_extended",
    PremierMusicPro = "premier_music_pro",
    PremierMusicComp = "premier_music_comp"
}
/**
 * An audio track in a licensing request
**/
export declare class LicenseAudio extends SpeakeasyBase {
    audioId: string;
    license?: LicenseAudioLicenseEnum;
    searchId?: string;
}
