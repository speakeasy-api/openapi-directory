import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The status to retrieve Account Numbers for.
 */
export declare enum ListAccountNumbersStatusEnum {
    Active = "active",
    Disabled = "disabled",
    Canceled = "canceled"
}
export declare class ListAccountNumbersRequest extends SpeakeasyBase {
    accountId?: string;
    cursor?: string;
    limit?: number;
    /**
     * The status to retrieve Account Numbers for.
     */
    status?: ListAccountNumbersStatusEnum;
}
export declare enum ListAccountNumbersDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListAccountNumbersDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListAccountNumbersDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListAccountNumbersDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListAccountNumbersDefaultApplicationJson13TypeEnum;
}
export declare enum ListAccountNumbersDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListAccountNumbersDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListAccountNumbersDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListAccountNumbersDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListAccountNumbersDefaultApplicationJson12TypeEnum;
}
export declare enum ListAccountNumbersDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListAccountNumbersDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListAccountNumbersDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListAccountNumbersDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListAccountNumbersDefaultApplicationJson11TypeEnum;
}
export declare enum ListAccountNumbersDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListAccountNumbersDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListAccountNumbersDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListAccountNumbersDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListAccountNumbersDefaultApplicationJson10TypeEnum;
}
export declare enum ListAccountNumbersDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListAccountNumbersDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListAccountNumbersDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListAccountNumbersDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListAccountNumbersDefaultApplicationJson9TypeEnum;
}
export declare enum ListAccountNumbersDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListAccountNumbersDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListAccountNumbersDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListAccountNumbersDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListAccountNumbersDefaultApplicationJson8TypeEnum;
}
export declare enum ListAccountNumbersDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListAccountNumbersDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListAccountNumbersDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListAccountNumbersDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListAccountNumbersDefaultApplicationJson7TypeEnum;
}
export declare enum ListAccountNumbersDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListAccountNumbersDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListAccountNumbersDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListAccountNumbersDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListAccountNumbersDefaultApplicationJson6TypeEnum;
}
export declare enum ListAccountNumbersDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListAccountNumbersDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListAccountNumbersDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListAccountNumbersDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListAccountNumbersDefaultApplicationJson5TypeEnum;
}
export declare enum ListAccountNumbersDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListAccountNumbersDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListAccountNumbersDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListAccountNumbersDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListAccountNumbersDefaultApplicationJson4TypeEnum;
}
export declare enum ListAccountNumbersDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListAccountNumbersDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListAccountNumbersDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListAccountNumbersDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListAccountNumbersDefaultApplicationJson3TypeEnum;
}
export declare enum ListAccountNumbersDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListAccountNumbersDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListAccountNumbersDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListAccountNumbersDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListAccountNumbersDefaultApplicationJson2TypeEnum;
}
export declare enum ListAccountNumbersDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListAccountNumbersDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListAccountNumbersDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListAccountNumbersDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListAccountNumbersDefaultApplicationJson1TypeEnum;
}
export declare class ListAccountNumbersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Account Number List
     */
    accountNumberList?: shared.AccountNumberList;
    /**
     * Error
     */
    error?: any;
}
