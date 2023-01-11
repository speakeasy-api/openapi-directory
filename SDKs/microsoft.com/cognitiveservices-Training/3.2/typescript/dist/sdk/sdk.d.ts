import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { DomainsApi } from "./domainsapi";
import { ImageApi } from "./imageapi";
import { ImageRegionProposalApi } from "./imageregionproposalapi";
import { PredictionsApi } from "./predictionsapi";
import { ProjectApi } from "./projectapi";
import { SuggestTagsAndRegionsApi } from "./suggesttagsandregionsapi";
import { TagsApi } from "./tagsapi";
export declare const ServerList: readonly ["https://southcentralus.api.cognitive.microsoft.com/customvision/v3.2/training", "https://{Endpoint}/customvision/v3.2/training"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
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
