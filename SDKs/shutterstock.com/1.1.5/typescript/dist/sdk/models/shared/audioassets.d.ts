import { SpeakeasyBase } from "../../../internal/utils";
import { AudioAssetDetails } from "./audioassetdetails";
/**
 * Files that are available as part of an audio asset
**/
export declare class AudioAssets extends SpeakeasyBase {
    albumArt?: AudioAssetDetails;
    cleanAudio?: AudioAssetDetails;
    originalAudio?: AudioAssetDetails;
    previewMp3?: AudioAssetDetails;
    previewOgg?: AudioAssetDetails;
    waveform?: AudioAssetDetails;
}
