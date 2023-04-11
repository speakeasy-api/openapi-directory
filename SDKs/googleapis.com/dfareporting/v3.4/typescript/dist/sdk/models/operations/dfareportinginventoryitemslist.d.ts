import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DfareportingInventoryItemsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Field by which to sort the list.
 */
export declare enum DfareportingInventoryItemsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
/**
 * Order of sorted results.
 */
export declare enum DfareportingInventoryItemsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
/**
 * Select only inventory items with this type.
 */
export declare enum DfareportingInventoryItemsListTypeEnum {
    PlanningPlacementTypeRegular = "PLANNING_PLACEMENT_TYPE_REGULAR",
    PlanningPlacementTypeCredit = "PLANNING_PLACEMENT_TYPE_CREDIT"
}
export declare class DfareportingInventoryItemsListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Select only inventory items with these IDs.
     */
    ids?: string[];
    /**
     * Select only inventory items that are in plan.
     */
    inPlan?: boolean;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Maximum number of results to return.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Select only inventory items that belong to specified orders.
     */
    orderId?: string[];
    /**
     * Value of the nextPageToken from the previous result page.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * User profile ID associated with this request.
     */
    profileId: string;
    /**
     * Project ID for order documents.
     */
    projectId: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Select only inventory items that are associated with these sites.
     */
    siteId?: string[];
    /**
     * Field by which to sort the list.
     */
    sortField?: DfareportingInventoryItemsListSortFieldEnum;
    /**
     * Order of sorted results.
     */
    sortOrder?: DfareportingInventoryItemsListSortOrderEnum;
    /**
     * Select only inventory items with this type.
     */
    type?: DfareportingInventoryItemsListTypeEnum;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class DfareportingInventoryItemsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    inventoryItemsListResponse?: shared.InventoryItemsListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
