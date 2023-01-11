import { SpeakeasyBase } from "../../../internal/utils";
import { ReportKey } from "./reportkey";
import { ReportMetadata } from "./reportmetadata";
import { ParametersT } from "./parameters";
/**
 * Represents a report.
**/
export declare class Report extends SpeakeasyBase {
    key?: ReportKey;
    metadata?: ReportMetadata;
    params?: ParametersT;
}
