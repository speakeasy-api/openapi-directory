import { AxiosInstance } from "axios";
import { Cargo } from "./cargo";
import { Offers } from "./offers";
import { Operations } from "./operations";
import { ReferenceData } from "./referencedata";
export declare const ServerList: readonly ["https://api.lufthansa.com/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    cargo: Cargo;
    offers: Offers;
    operations: Operations;
    referenceData: ReferenceData;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
