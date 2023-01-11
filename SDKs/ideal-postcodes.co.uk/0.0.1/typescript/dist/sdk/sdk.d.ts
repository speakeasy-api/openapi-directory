import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Addresses } from "./addresses";
import { Autocomplete } from "./autocomplete";
import { Keys } from "./keys";
import { Licensees } from "./licensees";
import { Postcodes } from "./postcodes";
import { Udprn } from "./udprn";
import { Umprn } from "./umprn";
export declare const ServerList: readonly ["https://api.ideal-postcodes.co.uk/v1/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    addresses: Addresses;
    autocomplete: Autocomplete;
    keys: Keys;
    licensees: Licensees;
    postcodes: Postcodes;
    udprn: Udprn;
    umprn: Umprn;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
