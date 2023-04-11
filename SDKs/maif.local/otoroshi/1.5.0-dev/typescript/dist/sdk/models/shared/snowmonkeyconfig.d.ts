import { SpeakeasyBase } from "../../../internal/utils";
import { ChaosConfig } from "./chaosconfig";
import { OutageStrategyEnum } from "./outagestrategyenum";
/**
 * Configuration for the faults that can be injected in requests. The name Snow Monkey is an hommage to Netflix's Chaos Monkey 😉
 */
export declare class SnowMonkeyConfig extends SpeakeasyBase {
    /**
     * Configuration for the faults that can be injected in requests
     */
    chaosConfig: ChaosConfig;
    /**
     * Whether or not outages will actualy impact requests
     */
    dryRun: boolean;
    /**
     * Whether or not this config is enabled
     */
    enabled: boolean;
    /**
     * Whether or not user facing apps. will be impacted by Snow Monkey
     */
    includeUserFacingDescriptors: boolean;
    /**
     * Start of outage duration range
     */
    outageDurationFrom: number;
    /**
     * End of outage duration range
     */
    outageDurationTo: number;
    outageStrategy: OutageStrategyEnum;
    /**
     * Start time of Snow Monkey each day
     */
    startTime: string;
    /**
     * Stop time of Snow Monkey each day
     */
    stopTime: string;
    /**
     * Groups impacted by Snow Monkey. If empty, all groups will be impacted
     */
    targetGroups: string[];
    /**
     * Number of time per day each service will be outage
     */
    timesPerDay: number;
}
