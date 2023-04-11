import { SpeakeasyBase } from "../../../internal/utils";
import { BadResponsesFaultConfig } from "./badresponsesfaultconfig";
import { LargeRequestFaultConfig } from "./largerequestfaultconfig";
import { LargeResponseFaultConfig } from "./largeresponsefaultconfig";
import { LatencyInjectionFaultConfig } from "./latencyinjectionfaultconfig";
/**
 * Configuration for the faults that can be injected in requests
 */
export declare class ChaosConfig extends SpeakeasyBase {
    /**
     * Config for bad requests injection fault
     */
    badResponsesFaultConfig?: BadResponsesFaultConfig;
    /**
     * Whether or not this config is enabled
     */
    enabled: boolean;
    /**
     * Config for large request injection fault
     */
    largeRequestFaultConfig?: LargeRequestFaultConfig;
    /**
     * Config for large response injection fault
     */
    largeResponseFaultConfig?: LargeResponseFaultConfig;
    /**
     * Config for large latency injection fault
     */
    latencyInjectionFaultConfig?: LatencyInjectionFaultConfig;
}
