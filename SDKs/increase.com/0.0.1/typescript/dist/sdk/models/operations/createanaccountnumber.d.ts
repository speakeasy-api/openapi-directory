import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAnAccountNumberDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CreateAnAccountNumberDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CreateAnAccountNumberDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CreateAnAccountNumberDefaultApplicationJson13StatusEnum;
    title: string;
    type: CreateAnAccountNumberDefaultApplicationJson13TypeEnum;
}
export declare enum CreateAnAccountNumberDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnAccountNumberDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CreateAnAccountNumberDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountNumberDefaultApplicationJson12StatusEnum;
    title: string;
    type: CreateAnAccountNumberDefaultApplicationJson12TypeEnum;
}
export declare enum CreateAnAccountNumberDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAnAccountNumberDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CreateAnAccountNumberDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountNumberDefaultApplicationJson11StatusEnum;
    title: string;
    type: CreateAnAccountNumberDefaultApplicationJson11TypeEnum;
}
export declare enum CreateAnAccountNumberDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAnAccountNumberDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CreateAnAccountNumberDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountNumberDefaultApplicationJson10StatusEnum;
    title: string;
    type: CreateAnAccountNumberDefaultApplicationJson10TypeEnum;
}
export declare enum CreateAnAccountNumberDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAnAccountNumberDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CreateAnAccountNumberDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CreateAnAccountNumberDefaultApplicationJson9StatusEnum;
    title: string;
    type: CreateAnAccountNumberDefaultApplicationJson9TypeEnum;
}
export declare enum CreateAnAccountNumberDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAnAccountNumberDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CreateAnAccountNumberDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountNumberDefaultApplicationJson8StatusEnum;
    title: string;
    type: CreateAnAccountNumberDefaultApplicationJson8TypeEnum;
}
export declare enum CreateAnAccountNumberDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CreateAnAccountNumberDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CreateAnAccountNumberDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountNumberDefaultApplicationJson7StatusEnum;
    title: string;
    type: CreateAnAccountNumberDefaultApplicationJson7TypeEnum;
}
export declare enum CreateAnAccountNumberDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CreateAnAccountNumberDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CreateAnAccountNumberDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountNumberDefaultApplicationJson6StatusEnum;
    title: string;
    type: CreateAnAccountNumberDefaultApplicationJson6TypeEnum;
}
export declare enum CreateAnAccountNumberDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnAccountNumberDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CreateAnAccountNumberDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountNumberDefaultApplicationJson5StatusEnum;
    title: string;
    type: CreateAnAccountNumberDefaultApplicationJson5TypeEnum;
}
export declare enum CreateAnAccountNumberDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CreateAnAccountNumberDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CreateAnAccountNumberDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountNumberDefaultApplicationJson4StatusEnum;
    title: string;
    type: CreateAnAccountNumberDefaultApplicationJson4TypeEnum;
}
export declare enum CreateAnAccountNumberDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAnAccountNumberDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CreateAnAccountNumberDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountNumberDefaultApplicationJson3StatusEnum;
    title: string;
    type: CreateAnAccountNumberDefaultApplicationJson3TypeEnum;
}
export declare enum CreateAnAccountNumberDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnAccountNumberDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CreateAnAccountNumberDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountNumberDefaultApplicationJson2StatusEnum;
    title: string;
    type: CreateAnAccountNumberDefaultApplicationJson2TypeEnum;
}
export declare enum CreateAnAccountNumberDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAnAccountNumberDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CreateAnAccountNumberDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountNumberDefaultApplicationJson1StatusEnum;
    title: string;
    type: CreateAnAccountNumberDefaultApplicationJson1TypeEnum;
}
export declare class CreateAnAccountNumberResponse extends SpeakeasyBase {
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
