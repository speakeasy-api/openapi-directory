import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a service-defined function call that was invoked during test execution.
 */
export declare class FunctionCall extends SpeakeasyBase {
    /**
     * The arguments that were provided to the function.
     */
    args?: any[];
    /**
     * Name of the function invoked.
     */
    function?: string;
}
