import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Contributors {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get details about a single contributor
     *
     * @remarks
     * This endpoint shows information about a single contributor, including contributor type, equipment they use, and other attributes.
     */
    getContributor(req: operations.GetContributorRequest, security: operations.GetContributorSecurity, config?: AxiosRequestConfig): Promise<operations.GetContributorResponse>;
    /**
     * Get the items in contributors' collections
     *
     * @remarks
     * This endpoint lists the IDs of items in a contributor's collection and the date that each was added.
     */
    getContributorCollectionItems(req: operations.GetContributorCollectionItemsRequest, security: operations.GetContributorCollectionItemsSecurity, config?: AxiosRequestConfig): Promise<operations.GetContributorCollectionItemsResponse>;
    /**
     * Get details about contributors' collections
     *
     * @remarks
     * This endpoint gets more detailed information about a contributor's collection, including its cover image, timestamps for its creation, and most recent update. To get the items in collections, use GET /v2/contributors/{contributor_id}/collections/{id}/items.
     */
    getContributorCollections(req: operations.GetContributorCollectionsRequest, security: operations.GetContributorCollectionsSecurity, config?: AxiosRequestConfig): Promise<operations.GetContributorCollectionsResponse>;
    /**
     * List contributors' collections
     *
     * @remarks
     * This endpoint lists collections based on contributor ID.
     */
    getContributorCollectionsList(req: operations.GetContributorCollectionsListRequest, security: operations.GetContributorCollectionsListSecurity, config?: AxiosRequestConfig): Promise<operations.GetContributorCollectionsListResponse>;
    /**
     * Get details about multiple contributors
     *
     * @remarks
     * This endpoint lists information about one or more contributors, including contributor type, equipment they use and other attributes.
     */
    getContributorList(req: operations.GetContributorListRequest, security: operations.GetContributorListSecurity, config?: AxiosRequestConfig): Promise<operations.GetContributorListResponse>;
}
