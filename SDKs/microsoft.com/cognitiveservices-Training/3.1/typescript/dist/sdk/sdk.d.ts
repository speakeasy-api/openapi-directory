import { DomainsApi } from "./domainsapi";
import { ImageApi } from "./imageapi";
import { ImageRegionProposalApi } from "./imageregionproposalapi";
import { PredictionsApi } from "./predictionsapi";
import { ProjectApi } from "./projectapi";
import { SuggestTagsAndRegionsApi } from "./suggesttagsandregionsapi";
import { TagsApi } from "./tagsapi";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://southcentralus.api.cognitive.microsoft.com/customvision/v3.1/training", "https://{Endpoint}/customvision/v3.1/training"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
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
    private _globals;
    constructor(props?: SDKProps);
}
