import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message containing environment configuration for a Lighthouse run.
 */
export declare class Environment extends SpeakeasyBase {
    /**
     * The benchmark index number that indicates rough device class.
     */
    benchmarkIndex?: number;
    /**
     * The version of libraries with which these results were generated. Ex: axe-core.
     */
    credits?: Record<string, string>;
    /**
     * The user agent string of the version of Chrome used.
     */
    hostUserAgent?: string;
    /**
     * The user agent string that was sent over the network.
     */
    networkUserAgent?: string;
}
