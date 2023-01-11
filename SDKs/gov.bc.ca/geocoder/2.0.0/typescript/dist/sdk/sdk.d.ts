import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Intersections } from "./intersections";
import { Occupants } from "./occupants";
import { Parcels } from "./parcels";
import { Sites } from "./sites";
export declare const ServerList: readonly ["https://geocoder.api.gov.bc.ca/", "https://geocodertst.api.gov.bc.ca/", "https://geocoderdlv.api.gov.bc.ca/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    intersections: Intersections;
    occupants: Occupants;
    parcels: Parcels;
    sites: Sites;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
