import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateALimitDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CreateALimitDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CreateALimitDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CreateALimitDefaultApplicationJson13StatusEnum;
    title: string;
    type: CreateALimitDefaultApplicationJson13TypeEnum;
}
export declare enum CreateALimitDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateALimitDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CreateALimitDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CreateALimitDefaultApplicationJson12StatusEnum;
    title: string;
    type: CreateALimitDefaultApplicationJson12TypeEnum;
}
export declare enum CreateALimitDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateALimitDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CreateALimitDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CreateALimitDefaultApplicationJson11StatusEnum;
    title: string;
    type: CreateALimitDefaultApplicationJson11TypeEnum;
}
export declare enum CreateALimitDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CreateALimitDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CreateALimitDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CreateALimitDefaultApplicationJson10StatusEnum;
    title: string;
    type: CreateALimitDefaultApplicationJson10TypeEnum;
}
export declare enum CreateALimitDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CreateALimitDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CreateALimitDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CreateALimitDefaultApplicationJson9StatusEnum;
    title: string;
    type: CreateALimitDefaultApplicationJson9TypeEnum;
}
export declare enum CreateALimitDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateALimitDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CreateALimitDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CreateALimitDefaultApplicationJson8StatusEnum;
    title: string;
    type: CreateALimitDefaultApplicationJson8TypeEnum;
}
export declare enum CreateALimitDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CreateALimitDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CreateALimitDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CreateALimitDefaultApplicationJson7StatusEnum;
    title: string;
    type: CreateALimitDefaultApplicationJson7TypeEnum;
}
export declare enum CreateALimitDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CreateALimitDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CreateALimitDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CreateALimitDefaultApplicationJson6StatusEnum;
    title: string;
    type: CreateALimitDefaultApplicationJson6TypeEnum;
}
export declare enum CreateALimitDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateALimitDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CreateALimitDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CreateALimitDefaultApplicationJson5StatusEnum;
    title: string;
    type: CreateALimitDefaultApplicationJson5TypeEnum;
}
export declare enum CreateALimitDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CreateALimitDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CreateALimitDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CreateALimitDefaultApplicationJson4StatusEnum;
    title: string;
    type: CreateALimitDefaultApplicationJson4TypeEnum;
}
export declare enum CreateALimitDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateALimitDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CreateALimitDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CreateALimitDefaultApplicationJson3StatusEnum;
    title: string;
    type: CreateALimitDefaultApplicationJson3TypeEnum;
}
export declare enum CreateALimitDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateALimitDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CreateALimitDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CreateALimitDefaultApplicationJson2StatusEnum;
    title: string;
    type: CreateALimitDefaultApplicationJson2TypeEnum;
}
export declare enum CreateALimitDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateALimitDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CreateALimitDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CreateALimitDefaultApplicationJson1StatusEnum;
    title: string;
    type: CreateALimitDefaultApplicationJson1TypeEnum;
}
export declare class CreateALimitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Limit
     */
    limit?: shared.Limit;
}
