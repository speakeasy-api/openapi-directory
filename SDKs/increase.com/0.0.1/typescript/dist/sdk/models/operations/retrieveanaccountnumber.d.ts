import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAnAccountNumberRequest extends SpeakeasyBase {
    accountNumberId: string;
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveAnAccountNumberDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveAnAccountNumberDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveAnAccountNumberDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveAnAccountNumberDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountNumberDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveAnAccountNumberDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveAnAccountNumberDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountNumberDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveAnAccountNumberDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveAnAccountNumberDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountNumberDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveAnAccountNumberDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveAnAccountNumberDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveAnAccountNumberDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveAnAccountNumberDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveAnAccountNumberDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountNumberDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveAnAccountNumberDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveAnAccountNumberDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountNumberDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveAnAccountNumberDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveAnAccountNumberDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountNumberDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveAnAccountNumberDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveAnAccountNumberDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountNumberDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveAnAccountNumberDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveAnAccountNumberDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountNumberDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveAnAccountNumberDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveAnAccountNumberDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountNumberDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveAnAccountNumberDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveAnAccountNumberDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountNumberDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveAnAccountNumberDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnAccountNumberDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveAnAccountNumberDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountNumberDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveAnAccountNumberDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveAnAccountNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Account Number
     */
    accountNumber?: shared.AccountNumber;
    /**
     * Error
     */
    error?: any;
}
