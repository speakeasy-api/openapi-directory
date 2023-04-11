import { SpeakeasyBase } from "../../../internal/utils";
import { ParametersT } from "./parameters";
import { ReportKey } from "./reportkey";
import { ReportMetadata } from "./reportmetadata";
/**
 * Represents a report.
 */
export declare class Report extends SpeakeasyBase {
    /**
     * Key used to identify a report.
     */
    key?: ReportKey;
    /**
     * Report metadata.
     */
    metadata?: ReportMetadata;
    /**
     * Parameters of a query or report.
     */
    params?: ParametersT;
}
