import { SpeakeasyBase } from "../../../internal/utils";
import { AirQualityPointHourlyData } from "./airqualitypointhourlydata";
/**
 * Successful Response
 */
export declare class AirQualityPointData extends SpeakeasyBase {
    data: AirQualityPointHourlyData[];
    /**
     * Elevation above sea level in metres (for units 'metric', 'uk', 'ca') or feet (for units 'us')
     */
    elevation: number;
    /**
     * Latitude of the point, always in the format <float><N/S>, for example ``23.5S``
     */
    lat: string;
    /**
     * Longitude of the point, always in the format <float><E/W>, for example ``23.5W``
     */
    lon: string;
    /**
     * Name of the timezone in format like 'Europe/London'. Available only when the place is specified through place ID.
     */
    timezone?: string;
}
