import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson13StatusEnum;
    title: string;
    type: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson13TypeEnum;
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson12StatusEnum;
    title: string;
    type: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson12TypeEnum;
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson11StatusEnum;
    title: string;
    type: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson11TypeEnum;
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson10StatusEnum;
    title: string;
    type: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson10TypeEnum;
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson9StatusEnum;
    title: string;
    type: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson9TypeEnum;
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson8StatusEnum;
    title: string;
    type: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson8TypeEnum;
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson7StatusEnum;
    title: string;
    type: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson7TypeEnum;
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson6StatusEnum;
    title: string;
    type: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson6TypeEnum;
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson5StatusEnum;
    title: string;
    type: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson5TypeEnum;
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson4StatusEnum;
    title: string;
    type: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson4TypeEnum;
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson3StatusEnum;
    title: string;
    type: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson3TypeEnum;
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson2StatusEnum;
    title: string;
    type: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson2TypeEnum;
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson1StatusEnum;
    title: string;
    type: SimulateARealTimePaymentsTransferToYourAccountDefaultApplicationJson1TypeEnum;
}
export declare class SimulateARealTimePaymentsTransferToYourAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Inbound Real Time Payments Transfer Simulation Result
     */
    inboundRealTimePaymentsTransferSimulationResult?: shared.InboundRealTimePaymentsTransferSimulationResult;
}
