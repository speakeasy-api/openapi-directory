import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveALimitRequest extends SpeakeasyBase {
    limitId: string;
}
export declare enum RetrieveALimitDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveALimitDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveALimitDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveALimitDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveALimitDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveALimitDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveALimitDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveALimitDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveALimitDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveALimitDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveALimitDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveALimitDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveALimitDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveALimitDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveALimitDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveALimitDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveALimitDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveALimitDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveALimitDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveALimitDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveALimitDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveALimitDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveALimitDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveALimitDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveALimitDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveALimitDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveALimitDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveALimitDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveALimitDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveALimitDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveALimitDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveALimitDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveALimitDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveALimitDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveALimitDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveALimitDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveALimitDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveALimitDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveALimitDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveALimitDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveALimitDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveALimitDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveALimitDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveALimitDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveALimitDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveALimitDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveALimitDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveALimitDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveALimitDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveALimitDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveALimitDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveALimitDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveALimitDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveALimitDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveALimitDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveALimitDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveALimitDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveALimitDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveALimitDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveALimitDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveALimitDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveALimitDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveALimitDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveALimitDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveALimitDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveALimitResponse extends SpeakeasyBase {
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
