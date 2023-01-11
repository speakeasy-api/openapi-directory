import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Copyrights } from "./copyrights";
import { Raster } from "./raster";
import { Vector } from "./vector";
import { WmsWmts } from "./wmswmts";
export declare const ServerList: readonly ["https://api.tomtom.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    copyrights: Copyrights;
    raster: Raster;
    vector: Vector;
    wmsWMTS: WmsWmts;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
