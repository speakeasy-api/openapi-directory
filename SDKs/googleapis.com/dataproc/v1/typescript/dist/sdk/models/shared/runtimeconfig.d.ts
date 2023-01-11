import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Runtime configuration for a workload.
**/
export declare class RuntimeConfig extends SpeakeasyBase {
    containerImage?: string;
    properties?: Record<string, string>;
    version?: string;
}
