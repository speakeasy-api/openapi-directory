import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class SimulateAnAchTransferToYourAccountDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: SimulateAnAchTransferToYourAccountDefaultApplicationJson13StatusEnum;
    title: string;
    type: SimulateAnAchTransferToYourAccountDefaultApplicationJson13TypeEnum;
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class SimulateAnAchTransferToYourAccountDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAchTransferToYourAccountDefaultApplicationJson12StatusEnum;
    title: string;
    type: SimulateAnAchTransferToYourAccountDefaultApplicationJson12TypeEnum;
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class SimulateAnAchTransferToYourAccountDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAchTransferToYourAccountDefaultApplicationJson11StatusEnum;
    title: string;
    type: SimulateAnAchTransferToYourAccountDefaultApplicationJson11TypeEnum;
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class SimulateAnAchTransferToYourAccountDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAchTransferToYourAccountDefaultApplicationJson10StatusEnum;
    title: string;
    type: SimulateAnAchTransferToYourAccountDefaultApplicationJson10TypeEnum;
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class SimulateAnAchTransferToYourAccountDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: SimulateAnAchTransferToYourAccountDefaultApplicationJson9StatusEnum;
    title: string;
    type: SimulateAnAchTransferToYourAccountDefaultApplicationJson9TypeEnum;
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class SimulateAnAchTransferToYourAccountDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAchTransferToYourAccountDefaultApplicationJson8StatusEnum;
    title: string;
    type: SimulateAnAchTransferToYourAccountDefaultApplicationJson8TypeEnum;
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class SimulateAnAchTransferToYourAccountDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAchTransferToYourAccountDefaultApplicationJson7StatusEnum;
    title: string;
    type: SimulateAnAchTransferToYourAccountDefaultApplicationJson7TypeEnum;
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class SimulateAnAchTransferToYourAccountDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAchTransferToYourAccountDefaultApplicationJson6StatusEnum;
    title: string;
    type: SimulateAnAchTransferToYourAccountDefaultApplicationJson6TypeEnum;
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class SimulateAnAchTransferToYourAccountDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAchTransferToYourAccountDefaultApplicationJson5StatusEnum;
    title: string;
    type: SimulateAnAchTransferToYourAccountDefaultApplicationJson5TypeEnum;
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class SimulateAnAchTransferToYourAccountDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAchTransferToYourAccountDefaultApplicationJson4StatusEnum;
    title: string;
    type: SimulateAnAchTransferToYourAccountDefaultApplicationJson4TypeEnum;
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class SimulateAnAchTransferToYourAccountDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAchTransferToYourAccountDefaultApplicationJson3StatusEnum;
    title: string;
    type: SimulateAnAchTransferToYourAccountDefaultApplicationJson3TypeEnum;
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class SimulateAnAchTransferToYourAccountDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAchTransferToYourAccountDefaultApplicationJson2StatusEnum;
    title: string;
    type: SimulateAnAchTransferToYourAccountDefaultApplicationJson2TypeEnum;
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SimulateAnAchTransferToYourAccountDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class SimulateAnAchTransferToYourAccountDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAchTransferToYourAccountDefaultApplicationJson1StatusEnum;
    title: string;
    type: SimulateAnAchTransferToYourAccountDefaultApplicationJson1TypeEnum;
}
export declare class SimulateAnAchTransferToYourAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Inbound ACH Transfer Simulation Result
     */
    inboundAchTransferSimulationResult?: shared.InboundAchTransferSimulationResult;
}
