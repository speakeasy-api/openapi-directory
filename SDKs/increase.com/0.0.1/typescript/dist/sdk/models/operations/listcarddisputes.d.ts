import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCardDisputesStatusInEnum {
    PendingReviewing = "pending_reviewing",
    Accepted = "accepted",
    Rejected = "rejected"
}
export declare class ListCardDisputesRequest extends SpeakeasyBase {
    createdAtAfter?: Date;
    createdAtBefore?: Date;
    createdAtOnOrAfter?: Date;
    createdAtOnOrBefore?: Date;
    cursor?: string;
    limit?: number;
    statusIn?: ListCardDisputesStatusInEnum[];
}
export declare enum ListCardDisputesDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListCardDisputesDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListCardDisputesDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListCardDisputesDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListCardDisputesDefaultApplicationJson13TypeEnum;
}
export declare enum ListCardDisputesDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListCardDisputesDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListCardDisputesDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListCardDisputesDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListCardDisputesDefaultApplicationJson12TypeEnum;
}
export declare enum ListCardDisputesDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListCardDisputesDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListCardDisputesDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListCardDisputesDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListCardDisputesDefaultApplicationJson11TypeEnum;
}
export declare enum ListCardDisputesDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListCardDisputesDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListCardDisputesDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListCardDisputesDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListCardDisputesDefaultApplicationJson10TypeEnum;
}
export declare enum ListCardDisputesDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListCardDisputesDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListCardDisputesDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListCardDisputesDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListCardDisputesDefaultApplicationJson9TypeEnum;
}
export declare enum ListCardDisputesDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListCardDisputesDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListCardDisputesDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListCardDisputesDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListCardDisputesDefaultApplicationJson8TypeEnum;
}
export declare enum ListCardDisputesDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListCardDisputesDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListCardDisputesDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListCardDisputesDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListCardDisputesDefaultApplicationJson7TypeEnum;
}
export declare enum ListCardDisputesDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListCardDisputesDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListCardDisputesDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListCardDisputesDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListCardDisputesDefaultApplicationJson6TypeEnum;
}
export declare enum ListCardDisputesDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListCardDisputesDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListCardDisputesDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListCardDisputesDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListCardDisputesDefaultApplicationJson5TypeEnum;
}
export declare enum ListCardDisputesDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListCardDisputesDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListCardDisputesDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListCardDisputesDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListCardDisputesDefaultApplicationJson4TypeEnum;
}
export declare enum ListCardDisputesDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListCardDisputesDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListCardDisputesDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListCardDisputesDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListCardDisputesDefaultApplicationJson3TypeEnum;
}
export declare enum ListCardDisputesDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListCardDisputesDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListCardDisputesDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListCardDisputesDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListCardDisputesDefaultApplicationJson2TypeEnum;
}
export declare enum ListCardDisputesDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListCardDisputesDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListCardDisputesDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListCardDisputesDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListCardDisputesDefaultApplicationJson1TypeEnum;
}
export declare class ListCardDisputesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Card Dispute List
     */
    cardDisputeList?: shared.CardDisputeList;
    /**
     * Error
     */
    error?: any;
}
