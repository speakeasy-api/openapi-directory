import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveACardDisputeRequest extends SpeakeasyBase {
    cardDisputeId: string;
}
export declare enum RetrieveACardDisputeDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveACardDisputeDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveACardDisputeDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveACardDisputeDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveACardDisputeDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveACardDisputeDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveACardDisputeDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveACardDisputeDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardDisputeDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveACardDisputeDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveACardDisputeDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveACardDisputeDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveACardDisputeDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardDisputeDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveACardDisputeDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveACardDisputeDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveACardDisputeDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveACardDisputeDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardDisputeDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveACardDisputeDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveACardDisputeDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveACardDisputeDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveACardDisputeDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveACardDisputeDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveACardDisputeDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveACardDisputeDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveACardDisputeDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveACardDisputeDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardDisputeDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveACardDisputeDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveACardDisputeDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveACardDisputeDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveACardDisputeDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardDisputeDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveACardDisputeDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveACardDisputeDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveACardDisputeDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveACardDisputeDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardDisputeDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveACardDisputeDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveACardDisputeDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveACardDisputeDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveACardDisputeDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardDisputeDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveACardDisputeDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveACardDisputeDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveACardDisputeDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveACardDisputeDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardDisputeDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveACardDisputeDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveACardDisputeDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveACardDisputeDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveACardDisputeDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardDisputeDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveACardDisputeDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveACardDisputeDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveACardDisputeDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveACardDisputeDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardDisputeDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveACardDisputeDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveACardDisputeDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveACardDisputeDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveACardDisputeDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardDisputeDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveACardDisputeDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveACardDisputeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Card Dispute
     */
    cardDispute?: shared.CardDispute;
    /**
     * Error
     */
    error?: any;
}
