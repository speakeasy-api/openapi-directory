import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SimulatesAdvancingTheStateOfACardDisputeRequest extends SpeakeasyBase {
    cardDisputeId: string;
    simulatesAdvancingTheStateOfACardDisputeParameters: shared.SimulatesAdvancingTheStateOfACardDisputeParameters;
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson13StatusEnum;
    title: string;
    type: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson13TypeEnum;
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson12StatusEnum;
    title: string;
    type: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson12TypeEnum;
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson11StatusEnum;
    title: string;
    type: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson11TypeEnum;
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson10StatusEnum;
    title: string;
    type: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson10TypeEnum;
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson9StatusEnum;
    title: string;
    type: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson9TypeEnum;
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson8StatusEnum;
    title: string;
    type: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson8TypeEnum;
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson7StatusEnum;
    title: string;
    type: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson7TypeEnum;
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson6StatusEnum;
    title: string;
    type: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson6TypeEnum;
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson5StatusEnum;
    title: string;
    type: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson5TypeEnum;
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson4StatusEnum;
    title: string;
    type: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson4TypeEnum;
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson3StatusEnum;
    title: string;
    type: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson3TypeEnum;
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson2StatusEnum;
    title: string;
    type: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson2TypeEnum;
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson1StatusEnum;
    title: string;
    type: SimulatesAdvancingTheStateOfACardDisputeDefaultApplicationJson1TypeEnum;
}
export declare class SimulatesAdvancingTheStateOfACardDisputeResponse extends SpeakeasyBase {
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
