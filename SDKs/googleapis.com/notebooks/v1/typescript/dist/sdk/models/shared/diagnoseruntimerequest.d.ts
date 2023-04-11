import { SpeakeasyBase } from "../../../internal/utils";
import { DiagnosticConfig } from "./diagnosticconfig";
/**
 * Request for creating a notebook instance diagnostic file.
 */
export declare class DiagnoseRuntimeRequest extends SpeakeasyBase {
    /**
     * Defines flags that are used to run the diagnostic tool
     */
    diagnosticConfig?: DiagnosticConfig;
}
