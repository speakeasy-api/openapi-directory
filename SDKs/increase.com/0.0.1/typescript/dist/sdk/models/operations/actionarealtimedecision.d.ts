import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionARealTimeDecisionRequest extends SpeakeasyBase {
    actionARealTimeDecisionParameters: shared.ActionARealTimeDecisionParameters;
    realTimeDecisionId: string;
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ActionARealTimeDecisionDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ActionARealTimeDecisionDefaultApplicationJson13StatusEnum;
    title: string;
    type: ActionARealTimeDecisionDefaultApplicationJson13TypeEnum;
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ActionARealTimeDecisionDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ActionARealTimeDecisionDefaultApplicationJson12StatusEnum;
    title: string;
    type: ActionARealTimeDecisionDefaultApplicationJson12TypeEnum;
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ActionARealTimeDecisionDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ActionARealTimeDecisionDefaultApplicationJson11StatusEnum;
    title: string;
    type: ActionARealTimeDecisionDefaultApplicationJson11TypeEnum;
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ActionARealTimeDecisionDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ActionARealTimeDecisionDefaultApplicationJson10StatusEnum;
    title: string;
    type: ActionARealTimeDecisionDefaultApplicationJson10TypeEnum;
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ActionARealTimeDecisionDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ActionARealTimeDecisionDefaultApplicationJson9StatusEnum;
    title: string;
    type: ActionARealTimeDecisionDefaultApplicationJson9TypeEnum;
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ActionARealTimeDecisionDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ActionARealTimeDecisionDefaultApplicationJson8StatusEnum;
    title: string;
    type: ActionARealTimeDecisionDefaultApplicationJson8TypeEnum;
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ActionARealTimeDecisionDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ActionARealTimeDecisionDefaultApplicationJson7StatusEnum;
    title: string;
    type: ActionARealTimeDecisionDefaultApplicationJson7TypeEnum;
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ActionARealTimeDecisionDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ActionARealTimeDecisionDefaultApplicationJson6StatusEnum;
    title: string;
    type: ActionARealTimeDecisionDefaultApplicationJson6TypeEnum;
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ActionARealTimeDecisionDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ActionARealTimeDecisionDefaultApplicationJson5StatusEnum;
    title: string;
    type: ActionARealTimeDecisionDefaultApplicationJson5TypeEnum;
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ActionARealTimeDecisionDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ActionARealTimeDecisionDefaultApplicationJson4StatusEnum;
    title: string;
    type: ActionARealTimeDecisionDefaultApplicationJson4TypeEnum;
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ActionARealTimeDecisionDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ActionARealTimeDecisionDefaultApplicationJson3StatusEnum;
    title: string;
    type: ActionARealTimeDecisionDefaultApplicationJson3TypeEnum;
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ActionARealTimeDecisionDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ActionARealTimeDecisionDefaultApplicationJson2StatusEnum;
    title: string;
    type: ActionARealTimeDecisionDefaultApplicationJson2TypeEnum;
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ActionARealTimeDecisionDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ActionARealTimeDecisionDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ActionARealTimeDecisionDefaultApplicationJson1StatusEnum;
    title: string;
    type: ActionARealTimeDecisionDefaultApplicationJson1TypeEnum;
}
export declare class ActionARealTimeDecisionResponse extends SpeakeasyBase {
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
