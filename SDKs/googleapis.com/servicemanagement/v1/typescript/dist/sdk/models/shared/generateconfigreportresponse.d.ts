import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeReport } from "./changereport";
import { Diagnostic } from "./diagnostic";
/**
 * Response message for GenerateConfigReport method.
 */
export declare class GenerateConfigReportResponse extends SpeakeasyBase {
    /**
     * list of ChangeReport, each corresponding to comparison between two service configurations.
     */
    changeReports?: ChangeReport[];
    /**
     * Errors / Linter warnings associated with the service definition this report belongs to.
     */
    diagnostics?: Diagnostic[];
    /**
     * ID of the service configuration this report belongs to.
     */
    id?: string;
    /**
     * Name of the service this report belongs to.
     */
    serviceName?: string;
}
