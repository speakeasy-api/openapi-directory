import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request for notebook instances to report information to Notebooks API.
**/
export declare class ReportInstanceInfoRequest extends SpeakeasyBase {
    metadata?: Record<string, string>;
    vmId?: string;
}
