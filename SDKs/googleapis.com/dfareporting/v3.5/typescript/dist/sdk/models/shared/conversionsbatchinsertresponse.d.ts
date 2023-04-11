import { SpeakeasyBase } from "../../../internal/utils";
import { ConversionStatus } from "./conversionstatus";
/**
 * Insert Conversions Response.
 */
export declare class ConversionsBatchInsertResponse extends SpeakeasyBase {
    /**
     * Indicates that some or all conversions failed to insert.
     */
    hasFailures?: boolean;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionsBatchInsertResponse".
     */
    kind?: string;
    /**
     * The insert status of each conversion. Statuses are returned in the same order that conversions are inserted.
     */
    status?: ConversionStatus[];
}
