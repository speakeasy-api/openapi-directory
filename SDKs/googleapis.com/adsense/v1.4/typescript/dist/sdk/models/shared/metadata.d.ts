import { SpeakeasyBase } from "../../../internal/utils";
import { ReportingMetadataEntry } from "./reportingmetadataentry";
/**
 * Successful response
 */
export declare class Metadata extends SpeakeasyBase {
    items?: ReportingMetadataEntry[];
    /**
     * Kind of list this is, in this case adsense#metadata.
     */
    kind?: string;
}
