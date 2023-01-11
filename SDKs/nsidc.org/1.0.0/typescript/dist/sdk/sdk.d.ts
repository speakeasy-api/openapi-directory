import { AxiosInstance } from "axios";
import { SwaggerDocs } from "./swaggerdocs";
export declare const ServerList: readonly ["http://nsidc.org/api/dataset/2"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    swaggerDocs: SwaggerDocs;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
