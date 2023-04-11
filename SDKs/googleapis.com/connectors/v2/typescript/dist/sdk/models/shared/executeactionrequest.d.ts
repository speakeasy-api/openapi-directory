import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for ActionService.ExecuteAction
 */
export declare class ExecuteActionRequest extends SpeakeasyBase {
    /**
     * Parameters for executing the action. The parameters can be key/value pairs or nested structs.
     */
    parameters?: Record<string, any>;
}
