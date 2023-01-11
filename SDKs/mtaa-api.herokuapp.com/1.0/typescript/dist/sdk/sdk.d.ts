import { AxiosInstance } from "axios";
import { DistrictsInRegion } from "./districtsinregion";
import { StreetsInAWard } from "./streetsinaward";
import { TanzaniaRegions } from "./tanzaniaregions";
import { WardsInADistrict } from "./wardsinadistrict";
import { NeighborhoodInAStreet } from "./neighborhoodinastreet";
export declare const ServerList: readonly ["https://mtaa-api.herokuapp.com/api"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
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
    constructor(props: SDKProps);
}
