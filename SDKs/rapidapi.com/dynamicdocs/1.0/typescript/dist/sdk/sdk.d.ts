import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { PdfGeneration } from "./pdfgeneration";
export declare const ServerList: readonly ["https://dynamicdocs.p.rapidapi.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    pdfGeneration: PdfGeneration;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
