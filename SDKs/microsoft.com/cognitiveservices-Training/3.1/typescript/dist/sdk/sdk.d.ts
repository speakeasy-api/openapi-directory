import { AxiosInstance } from "axios";
import { DomainsApi } from "./domainsapi";
import { ImageApi } from "./imageapi";
import { ImageRegionProposalApi } from "./imageregionproposalapi";
import { PredictionsApi } from "./predictionsapi";
import { ProjectApi } from "./projectapi";
import { SuggestTagsAndRegionsApi } from "./suggesttagsandregionsapi";
import { TagsApi } from "./tagsapi";
export declare const ServerList: readonly ["https://southcentralus.api.cognitive.microsoft.com/customvision/v3.1/training", "https://{Endpoint}/customvision/v3.1/training"];
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
    suggestTagsAndRegionsApi: SuggestTagsAndRegionsApi;
    tagsApi: TagsApi;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
