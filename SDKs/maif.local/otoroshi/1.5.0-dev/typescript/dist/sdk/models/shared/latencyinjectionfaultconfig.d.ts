import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Config for large latency injection fault
 */
export declare class LatencyInjectionFaultConfig extends SpeakeasyBase {
    /**
     * The start range of latency added to the request
     */
    from: number;
    /**
     * The percentage of requests affected by this fault. Value should be between 0.0 and 1.0
     */
    ratio: number;
    /**
     * The end range of latency added to the request
     */
    to: number;
}
