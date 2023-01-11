import { AxiosInstance } from "axios";
import { Locations } from "./locations";
import { PlaceActionTypeMetadata } from "./placeactiontypemetadata";
export declare const ServerList: readonly ["https://mybusinessplaceactions.googleapis.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    locations: Locations;
    placeActionTypeMetadata: PlaceActionTypeMetadata;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
