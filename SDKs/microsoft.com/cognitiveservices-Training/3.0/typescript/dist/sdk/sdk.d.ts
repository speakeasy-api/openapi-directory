import { AxiosInstance } from "axios";
import { DomainsApi } from "./domainsapi";
import { ImageApi } from "./imageapi";
import { ImageRegionProposalApi } from "./imageregionproposalapi";
import { PredictionsApi } from "./predictionsapi";
import { ProjectApi } from "./projectapi";
import { TagsApi } from "./tagsapi";
export declare const ServerList: readonly ["https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/training", "https://{Endpoint}/customvision/v3.0/training"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    domainsApi: DomainsApi;
    imageApi: ImageApi;
    imageRegionProposalApi: ImageRegionProposalApi;
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
