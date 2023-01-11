import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Directions } from "./directions";
import { Distance } from "./distance";
import { Route } from "./route";
export declare const ServerList: readonly ["https://router.api.gov.bc.ca/", "https://routertst.api.gov.bc.ca/", "https://routerdlv.api.gov.bc.ca/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    directions: Directions;
    distance: Distance;
    route: Route;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
