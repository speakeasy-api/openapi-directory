import { AxiosInstance } from "axios";
import { VbaDocuments } from "./vbadocuments";
export declare const ServerList: readonly ["https://sandbox-api.va.gov/services/vba_documents/{version}", "https://api.va.gov/services/vba_documents/{version}"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    vbaDocuments: VbaDocuments;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
