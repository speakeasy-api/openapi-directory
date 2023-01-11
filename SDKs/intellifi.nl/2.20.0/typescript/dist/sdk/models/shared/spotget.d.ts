import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
import { GeoCoords } from "./geocoords";
export declare class SpotGetAntennaReportLocations extends SpeakeasyBase {
    antennaNumber?: number;
    reportLocation?: Location;
    reportLocationId?: string;
    reportLocationUrl?: string;
}
export declare class SpotGet extends SpeakeasyBase {
    antennaReportLocations?: SpotGetAntennaReportLocations[];
    config?: Record<string, any>;
    configRequest?: Record<string, any>;
    geoCoords?: GeoCoords;
    id?: string;
    isOnline?: boolean;
    requestCounter?: number;
    senses?: Record<string, any>;
    sensesRequest?: Record<string, any>;
    serialNumber?: number;
    status?: any;
    timeCreated?: string;
    timeUpdated?: string;
    url?: string;
}
