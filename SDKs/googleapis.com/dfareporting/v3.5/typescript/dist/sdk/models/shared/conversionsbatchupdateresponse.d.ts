import { SpeakeasyBase } from "../../../internal/utils";
import { ConversionStatus } from "./conversionstatus";
/**
 * Update Conversions Response.
 */
export declare class ConversionsBatchUpdateResponse extends SpeakeasyBase {
    /**
     * Indicates that some or all conversions failed to update.
     */
    hasFailures?: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchUpdateResponse".
     */
    kind?: string;
    /**
     * The update status of each conversion. Statuses are returned in the same order that conversions are updated.
     */
    status?: ConversionStatus[];
}
