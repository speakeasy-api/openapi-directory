import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Contributors {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getContributor - Get details about a single contributor
     *
     * This endpoint shows information about a single contributor, including contributor type, equipment they use, and other attributes.
    **/
    getContributor(req: operations.GetContributorRequest, config?: AxiosRequestConfig): Promise<operations.GetContributorResponse>;
    /**
     * getContributorCollectionItems - Get the items in contributors' collections
     *
     * This endpoint lists the IDs of items in a contributor's collection and the date that each was added.
    **/
    getContributorCollectionItems(req: operations.GetContributorCollectionItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetContributorCollectionItemsResponse>;
    /**
     * getContributorCollections - Get details about contributors' collections
     *
     * This endpoint gets more detailed information about a contributor's collection, including its cover image, timestamps for its creation, and most recent update. To get the items in collections, use GET /v2/contributors/{contributor_id}/collections/{id}/items.
    **/
    getContributorCollections(req: operations.GetContributorCollectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetContributorCollectionsResponse>;
    /**
     * getContributorCollectionsList - List contributors' collections
     *
     * This endpoint lists collections based on contributor ID.
    **/
    getContributorCollectionsList(req: operations.GetContributorCollectionsListRequest, config?: AxiosRequestConfig): Promise<operations.GetContributorCollectionsListResponse>;
    /**
     * getContributorList - Get details about multiple contributors
     *
     * This endpoint lists information about one or more contributors, including contributor type, equipment they use and other attributes.
    **/
    getContributorList(req: operations.GetContributorListRequest, config?: AxiosRequestConfig): Promise<operations.GetContributorListResponse>;
}
