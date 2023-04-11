import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Filter Accounts for those with the specified status.
 */
export declare enum ListAccountsStatusEnum {
    Open = "open",
    Closed = "closed"
}
export declare class ListAccountsRequest extends SpeakeasyBase {
    cursor?: string;
    entityId?: string;
    limit?: number;
    /**
     * Filter Accounts for those with the specified status.
     */
    status?: ListAccountsStatusEnum;
}
export declare enum ListAccountsDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListAccountsDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListAccountsDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListAccountsDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListAccountsDefaultApplicationJson13TypeEnum;
}
export declare enum ListAccountsDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListAccountsDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListAccountsDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListAccountsDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListAccountsDefaultApplicationJson12TypeEnum;
}
export declare enum ListAccountsDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListAccountsDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListAccountsDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListAccountsDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListAccountsDefaultApplicationJson11TypeEnum;
}
export declare enum ListAccountsDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListAccountsDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListAccountsDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListAccountsDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListAccountsDefaultApplicationJson10TypeEnum;
}
export declare enum ListAccountsDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListAccountsDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListAccountsDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListAccountsDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListAccountsDefaultApplicationJson9TypeEnum;
}
export declare enum ListAccountsDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListAccountsDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListAccountsDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListAccountsDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListAccountsDefaultApplicationJson8TypeEnum;
}
export declare enum ListAccountsDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListAccountsDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListAccountsDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListAccountsDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListAccountsDefaultApplicationJson7TypeEnum;
}
export declare enum ListAccountsDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListAccountsDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListAccountsDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListAccountsDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListAccountsDefaultApplicationJson6TypeEnum;
}
export declare enum ListAccountsDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListAccountsDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListAccountsDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListAccountsDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListAccountsDefaultApplicationJson5TypeEnum;
}
export declare enum ListAccountsDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListAccountsDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListAccountsDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListAccountsDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListAccountsDefaultApplicationJson4TypeEnum;
}
export declare enum ListAccountsDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListAccountsDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListAccountsDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListAccountsDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListAccountsDefaultApplicationJson3TypeEnum;
}
export declare enum ListAccountsDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListAccountsDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListAccountsDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListAccountsDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListAccountsDefaultApplicationJson2TypeEnum;
}
export declare enum ListAccountsDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListAccountsDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListAccountsDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListAccountsDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListAccountsDefaultApplicationJson1TypeEnum;
}
export declare class ListAccountsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Account List
     */
    accountList?: shared.AccountList;
    /**
     * Error
     */
    error?: any;
}
