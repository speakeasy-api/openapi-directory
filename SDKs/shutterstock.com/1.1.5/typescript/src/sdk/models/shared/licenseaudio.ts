import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LicenseAudioLicenseEnum {
    AudioPlatform = "audio_platform",
    PremierMusicBasic = "premier_music_basic",
    PremierMusicExtended = "premier_music_extended",
    PremierMusicPro = "premier_music_pro",
    PremierMusicComp = "premier_music_comp"
}


// LicenseAudio
/** 
 * An audio track in a licensing request
**/
export class LicenseAudio extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_id" })
  audioId: string;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: LicenseAudioLicenseEnum;

  @SpeakeasyMetadata({ data: "json, name=search_id" })
  searchId?: string;
}
