import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RetrieveGroupDetailsDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveGroupDetailsDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveGroupDetailsDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveGroupDetailsDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveGroupDetailsDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveGroupDetailsDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveGroupDetailsDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveGroupDetailsDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveGroupDetailsDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveGroupDetailsDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveGroupDetailsDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveGroupDetailsDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveGroupDetailsDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveGroupDetailsDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveGroupDetailsDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveGroupDetailsDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveGroupDetailsDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveGroupDetailsDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveGroupDetailsDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveGroupDetailsDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveGroupDetailsDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveGroupDetailsDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveGroupDetailsDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveGroupDetailsDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveGroupDetailsDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveGroupDetailsDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveGroupDetailsDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveGroupDetailsDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveGroupDetailsDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveGroupDetailsDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveGroupDetailsDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveGroupDetailsDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveGroupDetailsDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveGroupDetailsDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveGroupDetailsDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveGroupDetailsDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveGroupDetailsDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveGroupDetailsDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveGroupDetailsDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveGroupDetailsDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveGroupDetailsDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveGroupDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Group
     */
    group?: shared.Group;
}
