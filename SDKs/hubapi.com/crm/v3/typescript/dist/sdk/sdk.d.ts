import { AxiosInstance } from "axios";
import { Cards } from "./cards";
import { SampleResponse } from "./sampleresponse";
export declare const ServerList: readonly ["https://api.hubapi.com/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    cards: Cards;
    sampleResponse: SampleResponse;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
