import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class SimulateAWireTransferToYourAccountDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: SimulateAWireTransferToYourAccountDefaultApplicationJson13StatusEnum;
    title: string;
    type: SimulateAWireTransferToYourAccountDefaultApplicationJson13TypeEnum;
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class SimulateAWireTransferToYourAccountDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: SimulateAWireTransferToYourAccountDefaultApplicationJson12StatusEnum;
    title: string;
    type: SimulateAWireTransferToYourAccountDefaultApplicationJson12TypeEnum;
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class SimulateAWireTransferToYourAccountDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: SimulateAWireTransferToYourAccountDefaultApplicationJson11StatusEnum;
    title: string;
    type: SimulateAWireTransferToYourAccountDefaultApplicationJson11TypeEnum;
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class SimulateAWireTransferToYourAccountDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: SimulateAWireTransferToYourAccountDefaultApplicationJson10StatusEnum;
    title: string;
    type: SimulateAWireTransferToYourAccountDefaultApplicationJson10TypeEnum;
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class SimulateAWireTransferToYourAccountDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: SimulateAWireTransferToYourAccountDefaultApplicationJson9StatusEnum;
    title: string;
    type: SimulateAWireTransferToYourAccountDefaultApplicationJson9TypeEnum;
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class SimulateAWireTransferToYourAccountDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: SimulateAWireTransferToYourAccountDefaultApplicationJson8StatusEnum;
    title: string;
    type: SimulateAWireTransferToYourAccountDefaultApplicationJson8TypeEnum;
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class SimulateAWireTransferToYourAccountDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: SimulateAWireTransferToYourAccountDefaultApplicationJson7StatusEnum;
    title: string;
    type: SimulateAWireTransferToYourAccountDefaultApplicationJson7TypeEnum;
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class SimulateAWireTransferToYourAccountDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: SimulateAWireTransferToYourAccountDefaultApplicationJson6StatusEnum;
    title: string;
    type: SimulateAWireTransferToYourAccountDefaultApplicationJson6TypeEnum;
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class SimulateAWireTransferToYourAccountDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: SimulateAWireTransferToYourAccountDefaultApplicationJson5StatusEnum;
    title: string;
    type: SimulateAWireTransferToYourAccountDefaultApplicationJson5TypeEnum;
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class SimulateAWireTransferToYourAccountDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: SimulateAWireTransferToYourAccountDefaultApplicationJson4StatusEnum;
    title: string;
    type: SimulateAWireTransferToYourAccountDefaultApplicationJson4TypeEnum;
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class SimulateAWireTransferToYourAccountDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: SimulateAWireTransferToYourAccountDefaultApplicationJson3StatusEnum;
    title: string;
    type: SimulateAWireTransferToYourAccountDefaultApplicationJson3TypeEnum;
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class SimulateAWireTransferToYourAccountDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: SimulateAWireTransferToYourAccountDefaultApplicationJson2StatusEnum;
    title: string;
    type: SimulateAWireTransferToYourAccountDefaultApplicationJson2TypeEnum;
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SimulateAWireTransferToYourAccountDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class SimulateAWireTransferToYourAccountDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: SimulateAWireTransferToYourAccountDefaultApplicationJson1StatusEnum;
    title: string;
    type: SimulateAWireTransferToYourAccountDefaultApplicationJson1TypeEnum;
}
export declare class SimulateAWireTransferToYourAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Inbound Wire Transfer Simulation Result
     */
    inboundWireTransferSimulationResult?: shared.InboundWireTransferSimulationResult;
}
