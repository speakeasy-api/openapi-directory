import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Documents } from "./documents";
import { Templates } from "./templates";
import { Workspaces } from "./workspaces";
export declare const ServerList: readonly ["https://us1.pdfgeneratorapi.com/api/v3"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    documents: Documents;
    templates: Templates;
    workspaces: Workspaces;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
