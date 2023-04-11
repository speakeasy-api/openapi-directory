import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Transcode Settings
 */
export declare class TranscodeSetting extends SpeakeasyBase {
    /**
     * Allowlist of video formats to be served to this placement. Set this list to null or empty to serve all video formats.
     */
    enabledVideoFormats?: number[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#transcodeSetting".
     */
    kind?: string;
}
