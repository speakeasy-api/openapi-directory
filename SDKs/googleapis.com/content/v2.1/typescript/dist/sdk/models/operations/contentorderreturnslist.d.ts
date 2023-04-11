import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ContentOrderreturnsListSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Return the results in the specified order.
 */
export declare enum ContentOrderreturnsListOrderByEnum {
    ReturnCreationTimeDesc = "RETURN_CREATION_TIME_DESC",
    ReturnCreationTimeAsc = "RETURN_CREATION_TIME_ASC"
}
export declare enum ContentOrderreturnsListShipmentStatesEnum {
    New = "NEW",
    Shipped = "SHIPPED",
    Completed = "COMPLETED",
    Undeliverable = "UNDELIVERABLE",
    Pending = "PENDING"
}
export declare enum ContentOrderreturnsListShipmentStatusEnum {
    New = "NEW",
    InProgress = "IN_PROGRESS",
    Processed = "PROCESSED"
}
export declare enum ContentOrderreturnsListShipmentTypesEnum {
    ByMail = "BY_MAIL",
    Returnless = "RETURNLESS",
    ContactCustomerSupport = "CONTACT_CUSTOMER_SUPPORT"
}
export declare class ContentOrderreturnsListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Obtains order returns that match the acknowledgement status. When set to true, obtains order returns that have been acknowledged. When false, obtains order returns that have not been acknowledged. When not provided, obtains order returns regardless of their acknowledgement status. We recommend using this filter set to `false`, in conjunction with the `acknowledge` call, such that only un-acknowledged order returns are returned.
     */
    acknowledged?: boolean;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Obtains order returns created before this date (inclusively), in ISO 8601 format.
     */
    createdEndDate?: string;
    /**
     * Obtains order returns created after this date (inclusively), in ISO 8601 format.
     */
    createdStartDate?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Obtains order returns with the specified order ids. If this parameter is provided, createdStartDate, createdEndDate, shipmentType, shipmentStatus, shipmentState and acknowledged parameters must be not set. Note: if googleOrderId and shipmentTrackingNumber parameters are provided, the obtained results will include all order returns that either match the specified order id or the specified tracking number.
     */
    googleOrderIds?: string[];
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The maximum number of order returns to return in the response, used for paging. The default value is 25 returns per page, and the maximum allowed value is 250 returns per page.
     */
    maxResults?: number;
    /**
     * The ID of the account that manages the order. This cannot be a multi-client account.
     */
    merchantId: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Return the results in the specified order.
     */
    orderBy?: ContentOrderreturnsListOrderByEnum;
    /**
     * The token returned by the previous request.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Obtains order returns that match any shipment state provided in this parameter. When this parameter is not provided, order returns are obtained regardless of their shipment states.
     */
    shipmentStates?: ContentOrderreturnsListShipmentStatesEnum[];
    /**
     * Obtains order returns that match any shipment status provided in this parameter. When this parameter is not provided, order returns are obtained regardless of their shipment statuses.
     */
    shipmentStatus?: ContentOrderreturnsListShipmentStatusEnum[];
    /**
     * Obtains order returns with the specified tracking numbers. If this parameter is provided, createdStartDate, createdEndDate, shipmentType, shipmentStatus, shipmentState and acknowledged parameters must be not set. Note: if googleOrderId and shipmentTrackingNumber parameters are provided, the obtained results will include all order returns that either match the specified order id or the specified tracking number.
     */
    shipmentTrackingNumbers?: string[];
    /**
     * Obtains order returns that match any shipment type provided in this parameter. When this parameter is not provided, order returns are obtained regardless of their shipment types.
     */
    shipmentTypes?: ContentOrderreturnsListShipmentTypesEnum[];
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class ContentOrderreturnsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    orderreturnsListResponse?: shared.OrderreturnsListResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
