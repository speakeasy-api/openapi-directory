import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveARealTimeDecisionRequest extends SpeakeasyBase {
    realTimeDecisionId: string;
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveARealTimeDecisionDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveARealTimeDecisionDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveARealTimeDecisionDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveARealTimeDecisionDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveARealTimeDecisionDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveARealTimeDecisionDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveARealTimeDecisionDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveARealTimeDecisionDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveARealTimeDecisionDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveARealTimeDecisionDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveARealTimeDecisionDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveARealTimeDecisionDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveARealTimeDecisionDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveARealTimeDecisionDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveARealTimeDecisionDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveARealTimeDecisionDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveARealTimeDecisionDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveARealTimeDecisionDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveARealTimeDecisionDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveARealTimeDecisionDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveARealTimeDecisionDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveARealTimeDecisionDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveARealTimeDecisionDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveARealTimeDecisionDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveARealTimeDecisionDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveARealTimeDecisionDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveARealTimeDecisionDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveARealTimeDecisionDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveARealTimeDecisionDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveARealTimeDecisionDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveARealTimeDecisionDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveARealTimeDecisionDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveARealTimeDecisionDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveARealTimeDecisionDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveARealTimeDecisionDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveARealTimeDecisionDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveARealTimeDecisionDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveARealTimeDecisionDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveARealTimeDecisionDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveARealTimeDecisionDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveARealTimeDecisionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Real-Time Decision
     */
    realTimeDecision?: shared.RealTimeDecision;
}
