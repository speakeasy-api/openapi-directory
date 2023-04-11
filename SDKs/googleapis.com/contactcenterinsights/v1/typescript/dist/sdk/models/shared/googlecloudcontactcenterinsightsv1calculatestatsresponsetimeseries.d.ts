import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval } from "./googlecloudcontactcenterinsightsv1calculatestatsresponsetimeseriesinterval";
/**
 * A time series representing conversations over time.
 */
export declare class GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries extends SpeakeasyBase {
    /**
     * The duration of each interval.
     */
    intervalDuration?: string;
    /**
     * An ordered list of intervals from earliest to latest, where each interval represents the number of conversations that transpired during the time window.
     */
    points?: GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeriesInterval[];
}
