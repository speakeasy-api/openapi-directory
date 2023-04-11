import { DistrictsInRegion } from "./districtsinregion";
import { NeighborhoodInAStreet } from "./neighborhoodinastreet";
import { StreetsInAWard } from "./streetsinaward";
import { TanzaniaRegions } from "./tanzaniaregions";
import { WardsInADistrict } from "./wardsinadistrict";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://mtaa-api.herokuapp.com/api"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Mtaa A simple REST API to access Tanzania's location information,With mtaa API you can easily query and integrate all the location in tanzania from region level to streets from your programming language of your your choice
 */
export declare class SDK {
    districtsInRegion: DistrictsInRegion;
    streetsInAWard: StreetsInAWard;
    tanzaniaRegions: TanzaniaRegions;
    wardsInADistrict: WardsInADistrict;
    neighborhoodInAStreet: NeighborhoodInAStreet;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
