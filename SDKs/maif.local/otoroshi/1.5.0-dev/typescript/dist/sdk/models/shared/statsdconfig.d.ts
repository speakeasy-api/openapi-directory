import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for statsd metrics push
 */
export declare class StatsdConfig extends SpeakeasyBase {
    /**
     * Datadog agent
     */
    datadog: boolean;
    /**
     * The host of the StatsD agent
     */
    host: string;
    /**
     * The port of the StatsD agent
     */
    port: number;
}
