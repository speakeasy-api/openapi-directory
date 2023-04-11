import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusStatsDimensions } from "./enterprisecrmeventbusstatsdimensions";
/**
 * Stats for the requested dimensions: QPS, duration, and error/warning rate
 */
export declare class EnterpriseCrmEventbusStats extends SpeakeasyBase {
    dimensions?: EnterpriseCrmEventbusStatsDimensions;
    /**
     * Average duration in seconds.
     */
    durationInSeconds?: number;
    /**
     * Average error rate.
     */
    errorRate?: number;
    /**
     * Queries per second.
     */
    qps?: number;
    /**
     * Average warning rate.
     */
    warningRate?: number;
}
