import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { AdditionalData } from "./additionaldata";
import { Filters } from "./filters";
import { Geocoding } from "./geocoding";
import { ReverseGeocoding } from "./reversegeocoding";
import { Search } from "./search";
export declare const ServerList: readonly ["https://api.tomtom.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    additionalData: AdditionalData;
    filters: Filters;
    geocoding: Geocoding;
    reverseGeocoding: ReverseGeocoding;
    search: Search;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
