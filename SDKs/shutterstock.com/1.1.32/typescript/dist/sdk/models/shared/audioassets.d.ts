import { SpeakeasyBase } from "../../../internal/utils";
import { AudioAssetDetails } from "./audioassetdetails";
import { ShortsLoopsStems } from "./shortsloopsstems";
/**
 * Files that are available as part of an audio asset
 */
export declare class AudioAssets extends SpeakeasyBase {
    /**
     * Information about a file that is part of an audio asset
     */
    albumArt?: AudioAssetDetails;
    /**
     * Information about a file that is part of an audio asset
     */
    cleanAudio?: AudioAssetDetails;
    /**
     * Information about a file that is part of an audio asset
     */
    originalAudio?: AudioAssetDetails;
    /**
     * Information about a file that is part of an audio asset
     */
    previewMp3?: AudioAssetDetails;
    /**
     * Information about a file that is part of an audio asset
     */
    previewOgg?: AudioAssetDetails;
    /**
     * Links for Shorts, Loops and Stems previews
     */
    shortsLoopsStems?: ShortsLoopsStems;
    /**
     * Information about a file that is part of an audio asset
     */
    waveform?: AudioAssetDetails;
}
