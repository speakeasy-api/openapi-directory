import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListExternalAccountsStatusInEnum {
    Active = "active",
    Archived = "archived"
}
export declare class ListExternalAccountsRequest extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
    statusIn?: ListExternalAccountsStatusInEnum[];
}
export declare enum ListExternalAccountsDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListExternalAccountsDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListExternalAccountsDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListExternalAccountsDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListExternalAccountsDefaultApplicationJson13TypeEnum;
}
export declare enum ListExternalAccountsDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListExternalAccountsDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListExternalAccountsDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListExternalAccountsDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListExternalAccountsDefaultApplicationJson12TypeEnum;
}
export declare enum ListExternalAccountsDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListExternalAccountsDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListExternalAccountsDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListExternalAccountsDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListExternalAccountsDefaultApplicationJson11TypeEnum;
}
export declare enum ListExternalAccountsDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListExternalAccountsDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListExternalAccountsDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListExternalAccountsDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListExternalAccountsDefaultApplicationJson10TypeEnum;
}
export declare enum ListExternalAccountsDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListExternalAccountsDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListExternalAccountsDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListExternalAccountsDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListExternalAccountsDefaultApplicationJson9TypeEnum;
}
export declare enum ListExternalAccountsDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListExternalAccountsDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListExternalAccountsDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListExternalAccountsDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListExternalAccountsDefaultApplicationJson8TypeEnum;
}
export declare enum ListExternalAccountsDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListExternalAccountsDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListExternalAccountsDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListExternalAccountsDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListExternalAccountsDefaultApplicationJson7TypeEnum;
}
export declare enum ListExternalAccountsDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListExternalAccountsDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListExternalAccountsDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListExternalAccountsDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListExternalAccountsDefaultApplicationJson6TypeEnum;
}
export declare enum ListExternalAccountsDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListExternalAccountsDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListExternalAccountsDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListExternalAccountsDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListExternalAccountsDefaultApplicationJson5TypeEnum;
}
export declare enum ListExternalAccountsDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListExternalAccountsDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListExternalAccountsDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListExternalAccountsDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListExternalAccountsDefaultApplicationJson4TypeEnum;
}
export declare enum ListExternalAccountsDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListExternalAccountsDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListExternalAccountsDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListExternalAccountsDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListExternalAccountsDefaultApplicationJson3TypeEnum;
}
export declare enum ListExternalAccountsDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListExternalAccountsDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListExternalAccountsDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListExternalAccountsDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListExternalAccountsDefaultApplicationJson2TypeEnum;
}
export declare enum ListExternalAccountsDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListExternalAccountsDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListExternalAccountsDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListExternalAccountsDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListExternalAccountsDefaultApplicationJson1TypeEnum;
}
export declare class ListExternalAccountsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * External Account List
     */
    externalAccountList?: shared.ExternalAccountList;
}
