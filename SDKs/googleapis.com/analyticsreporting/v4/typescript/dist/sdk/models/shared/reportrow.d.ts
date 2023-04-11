import { SpeakeasyBase } from "../../../internal/utils";
import { DateRangeValues } from "./daterangevalues";
/**
 * A row in the report.
 */
export declare class ReportRow extends SpeakeasyBase {
    /**
     * List of requested dimensions.
     */
    dimensions?: string[];
    /**
     * List of metrics for each requested DateRange.
     */
    metrics?: DateRangeValues[];
}
