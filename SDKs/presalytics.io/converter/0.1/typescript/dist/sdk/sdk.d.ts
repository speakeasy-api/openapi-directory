import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://api.presalytics.io/doc-converter/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
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
    /**
     * svgconvert - converts pptx file to svg image
    **/
    svgconvert(req: operations.SvgconvertRequest, config?: AxiosRequestConfig): Promise<operations.SvgconvertResponse>;
}
