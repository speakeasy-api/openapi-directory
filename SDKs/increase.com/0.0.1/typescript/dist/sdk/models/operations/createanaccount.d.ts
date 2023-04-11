import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAnAccountDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CreateAnAccountDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CreateAnAccountDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CreateAnAccountDefaultApplicationJson13StatusEnum;
    title: string;
    type: CreateAnAccountDefaultApplicationJson13TypeEnum;
}
export declare enum CreateAnAccountDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnAccountDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CreateAnAccountDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountDefaultApplicationJson12StatusEnum;
    title: string;
    type: CreateAnAccountDefaultApplicationJson12TypeEnum;
}
export declare enum CreateAnAccountDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAnAccountDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CreateAnAccountDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountDefaultApplicationJson11StatusEnum;
    title: string;
    type: CreateAnAccountDefaultApplicationJson11TypeEnum;
}
export declare enum CreateAnAccountDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAnAccountDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CreateAnAccountDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountDefaultApplicationJson10StatusEnum;
    title: string;
    type: CreateAnAccountDefaultApplicationJson10TypeEnum;
}
export declare enum CreateAnAccountDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAnAccountDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CreateAnAccountDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CreateAnAccountDefaultApplicationJson9StatusEnum;
    title: string;
    type: CreateAnAccountDefaultApplicationJson9TypeEnum;
}
export declare enum CreateAnAccountDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAnAccountDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CreateAnAccountDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountDefaultApplicationJson8StatusEnum;
    title: string;
    type: CreateAnAccountDefaultApplicationJson8TypeEnum;
}
export declare enum CreateAnAccountDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CreateAnAccountDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CreateAnAccountDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountDefaultApplicationJson7StatusEnum;
    title: string;
    type: CreateAnAccountDefaultApplicationJson7TypeEnum;
}
export declare enum CreateAnAccountDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CreateAnAccountDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CreateAnAccountDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountDefaultApplicationJson6StatusEnum;
    title: string;
    type: CreateAnAccountDefaultApplicationJson6TypeEnum;
}
export declare enum CreateAnAccountDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnAccountDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CreateAnAccountDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountDefaultApplicationJson5StatusEnum;
    title: string;
    type: CreateAnAccountDefaultApplicationJson5TypeEnum;
}
export declare enum CreateAnAccountDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CreateAnAccountDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CreateAnAccountDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountDefaultApplicationJson4StatusEnum;
    title: string;
    type: CreateAnAccountDefaultApplicationJson4TypeEnum;
}
export declare enum CreateAnAccountDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAnAccountDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CreateAnAccountDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountDefaultApplicationJson3StatusEnum;
    title: string;
    type: CreateAnAccountDefaultApplicationJson3TypeEnum;
}
export declare enum CreateAnAccountDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnAccountDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CreateAnAccountDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountDefaultApplicationJson2StatusEnum;
    title: string;
    type: CreateAnAccountDefaultApplicationJson2TypeEnum;
}
export declare enum CreateAnAccountDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAnAccountDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CreateAnAccountDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountDefaultApplicationJson1StatusEnum;
    title: string;
    type: CreateAnAccountDefaultApplicationJson1TypeEnum;
}
export declare class CreateAnAccountResponse extends SpeakeasyBase {
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
