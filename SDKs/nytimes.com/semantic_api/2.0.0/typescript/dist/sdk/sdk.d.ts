import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
export declare const ServerList: readonly ["http://api.nytimes.com/svc/semantic/v2/concept", "https://api.nytimes.com/svc/semantic/v2/concept"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    getNameConceptTypeSpecificConceptJson(req: operations.GetNameConceptTypeSpecificConceptJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetNameConceptTypeSpecificConceptJsonResponse>;
    getSearchJson(req: operations.GetSearchJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetSearchJsonResponse>;
}
