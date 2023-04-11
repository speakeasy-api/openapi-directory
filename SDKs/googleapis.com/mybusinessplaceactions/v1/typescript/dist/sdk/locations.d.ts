import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Locations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a place action link associated with the specified location, and returns it. The request is considered duplicate if the `parent`, `place_action_link.uri` and `place_action_link.place_action_type` are the same as a previous request.
     */
    mybusinessplaceactionsLocationsPlaceActionLinksCreate(req: operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessplaceactionsLocationsPlaceActionLinksCreateResponse>;
    /**
     * Deletes a place action link from the specified location.
     */
    mybusinessplaceactionsLocationsPlaceActionLinksDelete(req: operations.MybusinessplaceactionsLocationsPlaceActionLinksDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessplaceactionsLocationsPlaceActionLinksDeleteResponse>;
    /**
     * Gets the specified place action link.
     */
    mybusinessplaceactionsLocationsPlaceActionLinksGet(req: operations.MybusinessplaceactionsLocationsPlaceActionLinksGetRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessplaceactionsLocationsPlaceActionLinksGetResponse>;
    /**
     * Lists the place action links for the specified location.
     */
    mybusinessplaceactionsLocationsPlaceActionLinksList(req: operations.MybusinessplaceactionsLocationsPlaceActionLinksListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessplaceactionsLocationsPlaceActionLinksListResponse>;
    /**
     * Updates the specified place action link and returns it.
     */
    mybusinessplaceactionsLocationsPlaceActionLinksPatch(req: operations.MybusinessplaceactionsLocationsPlaceActionLinksPatchRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessplaceactionsLocationsPlaceActionLinksPatchResponse>;
}
