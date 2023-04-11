import { SpeakeasyBase } from "../../../internal/utils";
import { SystemParameter } from "./systemparameter";
/**
 * Define a system parameter rule mapping system parameter definitions to methods.
 */
export declare class SystemParameterRule extends SpeakeasyBase {
    /**
     * Define parameters. Multiple names may be defined for a parameter. For a given method call, only one of them should be used. If multiple names are used the behavior is implementation-dependent. If none of the specified names are present the behavior is parameter-dependent.
     */
    parameters?: SystemParameter[];
    /**
     * Selects the methods to which this rule applies. Use '*' to indicate all methods in all APIs. Refer to selector for syntax details.
     */
    selector?: string;
}
