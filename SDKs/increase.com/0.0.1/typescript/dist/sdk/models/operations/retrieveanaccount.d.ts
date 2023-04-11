import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAnAccountRequest extends SpeakeasyBase {
    accountId: string;
}
export declare enum RetrieveAnAccountDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveAnAccountDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveAnAccountDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveAnAccountDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveAnAccountDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveAnAccountDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnAccountDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveAnAccountDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveAnAccountDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveAnAccountDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnAccountDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveAnAccountDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveAnAccountDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveAnAccountDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnAccountDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveAnAccountDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveAnAccountDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveAnAccountDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnAccountDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveAnAccountDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveAnAccountDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveAnAccountDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveAnAccountDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnAccountDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveAnAccountDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveAnAccountDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveAnAccountDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveAnAccountDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveAnAccountDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveAnAccountDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveAnAccountDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveAnAccountDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveAnAccountDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveAnAccountDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveAnAccountDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnAccountDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveAnAccountDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveAnAccountDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveAnAccountDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveAnAccountDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveAnAccountDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveAnAccountDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveAnAccountDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnAccountDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveAnAccountDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveAnAccountDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveAnAccountDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnAccountDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveAnAccountDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveAnAccountDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveAnAccountDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnAccountDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveAnAccountDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveAnAccountDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveAnAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Account
     */
    account?: shared.Account;
    /**
     * Error
     */
    error?: any;
}
