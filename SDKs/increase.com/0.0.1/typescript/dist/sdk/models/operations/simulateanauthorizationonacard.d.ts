import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class SimulateAnAuthorizationOnACardDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: SimulateAnAuthorizationOnACardDefaultApplicationJson13StatusEnum;
    title: string;
    type: SimulateAnAuthorizationOnACardDefaultApplicationJson13TypeEnum;
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class SimulateAnAuthorizationOnACardDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAuthorizationOnACardDefaultApplicationJson12StatusEnum;
    title: string;
    type: SimulateAnAuthorizationOnACardDefaultApplicationJson12TypeEnum;
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class SimulateAnAuthorizationOnACardDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAuthorizationOnACardDefaultApplicationJson11StatusEnum;
    title: string;
    type: SimulateAnAuthorizationOnACardDefaultApplicationJson11TypeEnum;
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class SimulateAnAuthorizationOnACardDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAuthorizationOnACardDefaultApplicationJson10StatusEnum;
    title: string;
    type: SimulateAnAuthorizationOnACardDefaultApplicationJson10TypeEnum;
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class SimulateAnAuthorizationOnACardDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: SimulateAnAuthorizationOnACardDefaultApplicationJson9StatusEnum;
    title: string;
    type: SimulateAnAuthorizationOnACardDefaultApplicationJson9TypeEnum;
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class SimulateAnAuthorizationOnACardDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAuthorizationOnACardDefaultApplicationJson8StatusEnum;
    title: string;
    type: SimulateAnAuthorizationOnACardDefaultApplicationJson8TypeEnum;
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class SimulateAnAuthorizationOnACardDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAuthorizationOnACardDefaultApplicationJson7StatusEnum;
    title: string;
    type: SimulateAnAuthorizationOnACardDefaultApplicationJson7TypeEnum;
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class SimulateAnAuthorizationOnACardDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAuthorizationOnACardDefaultApplicationJson6StatusEnum;
    title: string;
    type: SimulateAnAuthorizationOnACardDefaultApplicationJson6TypeEnum;
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class SimulateAnAuthorizationOnACardDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAuthorizationOnACardDefaultApplicationJson5StatusEnum;
    title: string;
    type: SimulateAnAuthorizationOnACardDefaultApplicationJson5TypeEnum;
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class SimulateAnAuthorizationOnACardDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAuthorizationOnACardDefaultApplicationJson4StatusEnum;
    title: string;
    type: SimulateAnAuthorizationOnACardDefaultApplicationJson4TypeEnum;
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class SimulateAnAuthorizationOnACardDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAuthorizationOnACardDefaultApplicationJson3StatusEnum;
    title: string;
    type: SimulateAnAuthorizationOnACardDefaultApplicationJson3TypeEnum;
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class SimulateAnAuthorizationOnACardDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAuthorizationOnACardDefaultApplicationJson2StatusEnum;
    title: string;
    type: SimulateAnAuthorizationOnACardDefaultApplicationJson2TypeEnum;
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SimulateAnAuthorizationOnACardDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class SimulateAnAuthorizationOnACardDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAuthorizationOnACardDefaultApplicationJson1StatusEnum;
    title: string;
    type: SimulateAnAuthorizationOnACardDefaultApplicationJson1TypeEnum;
}
export declare class SimulateAnAuthorizationOnACardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Inbound Card Authorization Simulation Result
     */
    inboundCardAuthorizationSimulationResult?: shared.InboundCardAuthorizationSimulationResult;
}
