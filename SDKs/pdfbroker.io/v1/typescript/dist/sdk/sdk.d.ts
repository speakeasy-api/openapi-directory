import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Pdf } from "./pdf";
export declare const ServerList: readonly ["https://pdfbroker.io"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    pdf: Pdf;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
