import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AudioAssetDetails } from "./audioassetdetails";



// AudioAssets
/** 
 * Files that are available as part of an audio asset
**/
export class AudioAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=album_art" })
  albumArt?: AudioAssetDetails;

  @SpeakeasyMetadata({ data: "json, name=clean_audio" })
  cleanAudio?: AudioAssetDetails;

  @SpeakeasyMetadata({ data: "json, name=original_audio" })
  originalAudio?: AudioAssetDetails;

  @SpeakeasyMetadata({ data: "json, name=preview_mp3" })
  previewMp3?: AudioAssetDetails;

  @SpeakeasyMetadata({ data: "json, name=preview_ogg" })
  previewOgg?: AudioAssetDetails;

  @SpeakeasyMetadata({ data: "json, name=waveform" })
  waveform?: AudioAssetDetails;
}
