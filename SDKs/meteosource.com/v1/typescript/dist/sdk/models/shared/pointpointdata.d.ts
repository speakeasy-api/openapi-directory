import { SpeakeasyBase } from "../../../internal/utils";
import { PointPointAlerts } from "./pointpointalerts";
import { PointPointCurrentData } from "./pointpointcurrentdata";
import { PointPointDaily } from "./pointpointdaily";
import { PointPointHourly } from "./pointpointhourly";
import { PointPointMinutely } from "./pointpointminutely";
/**
 * Successful Response
 */
export declare class PointPointData extends SpeakeasyBase {
    alerts: PointPointAlerts;
    current?: PointPointCurrentData;
    daily?: PointPointDaily;
    /**
     * Elevation above sea level in metres (for units 'metric', 'uk', 'ca') or feet (for units 'us')
     */
    elevation: number;
    hourly?: PointPointHourly;
    /**
     * Latitude of the point, always in the format <float><N/S>, for example ``23.5S``
     */
    lat: string;
    /**
     * Longitude of the point, always in the format <float><E/W>, for example ``23.5W``
     */
    lon: string;
    minutely?: PointPointMinutely;
    /**
     * Name of the timezone in format like 'Europe/London'. Available only when the place is specified through place ID.
     */
    timezone?: string;
    /**
     * Unit system (metric, uk, ca or us)
     */
    units: string;
}
