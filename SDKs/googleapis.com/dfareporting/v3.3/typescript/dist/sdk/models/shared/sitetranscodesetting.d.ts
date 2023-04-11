import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Transcode Settings
 */
export declare class SiteTranscodeSetting extends SpeakeasyBase {
    /**
     * Allowlist of video formats to be served to this site template. Set this list to null or empty to serve all video formats.
     */
    enabledVideoFormats?: number[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#siteTranscodeSetting".
     */
    kind?: string;
}
