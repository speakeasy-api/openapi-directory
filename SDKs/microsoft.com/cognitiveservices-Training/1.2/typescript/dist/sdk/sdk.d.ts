import { AxiosInstance } from "axios";
import { AccountApi } from "./accountapi";
import { DomainsApi } from "./domainsapi";
import { ImageApi } from "./imageapi";
import { PredictionsApi } from "./predictionsapi";
import { ProjectApi } from "./projectapi";
import { TagsApi } from "./tagsapi";
export declare const ServerList: readonly ["https://southcentralus.api.cognitive.microsoft.com/customvision/v1.2/Training"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    accountApi: AccountApi;
    domainsApi: DomainsApi;
    imageApi: ImageApi;
    predictionsApi: PredictionsApi;
    projectApi: ProjectApi;
    tagsApi: TagsApi;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
