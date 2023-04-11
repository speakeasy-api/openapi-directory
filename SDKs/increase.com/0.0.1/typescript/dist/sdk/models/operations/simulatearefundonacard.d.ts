import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SimulateARefundOnACardDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum SimulateARefundOnACardDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class SimulateARefundOnACardDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: SimulateARefundOnACardDefaultApplicationJson13StatusEnum;
    title: string;
    type: SimulateARefundOnACardDefaultApplicationJson13TypeEnum;
}
export declare enum SimulateARefundOnACardDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateARefundOnACardDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class SimulateARefundOnACardDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: SimulateARefundOnACardDefaultApplicationJson12StatusEnum;
    title: string;
    type: SimulateARefundOnACardDefaultApplicationJson12TypeEnum;
}
export declare enum SimulateARefundOnACardDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SimulateARefundOnACardDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class SimulateARefundOnACardDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: SimulateARefundOnACardDefaultApplicationJson11StatusEnum;
    title: string;
    type: SimulateARefundOnACardDefaultApplicationJson11TypeEnum;
}
export declare enum SimulateARefundOnACardDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum SimulateARefundOnACardDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class SimulateARefundOnACardDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: SimulateARefundOnACardDefaultApplicationJson10StatusEnum;
    title: string;
    type: SimulateARefundOnACardDefaultApplicationJson10TypeEnum;
}
export declare enum SimulateARefundOnACardDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum SimulateARefundOnACardDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class SimulateARefundOnACardDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: SimulateARefundOnACardDefaultApplicationJson9StatusEnum;
    title: string;
    type: SimulateARefundOnACardDefaultApplicationJson9TypeEnum;
}
export declare enum SimulateARefundOnACardDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SimulateARefundOnACardDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class SimulateARefundOnACardDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: SimulateARefundOnACardDefaultApplicationJson8StatusEnum;
    title: string;
    type: SimulateARefundOnACardDefaultApplicationJson8TypeEnum;
}
export declare enum SimulateARefundOnACardDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum SimulateARefundOnACardDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class SimulateARefundOnACardDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: SimulateARefundOnACardDefaultApplicationJson7StatusEnum;
    title: string;
    type: SimulateARefundOnACardDefaultApplicationJson7TypeEnum;
}
export declare enum SimulateARefundOnACardDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum SimulateARefundOnACardDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class SimulateARefundOnACardDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: SimulateARefundOnACardDefaultApplicationJson6StatusEnum;
    title: string;
    type: SimulateARefundOnACardDefaultApplicationJson6TypeEnum;
}
export declare enum SimulateARefundOnACardDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateARefundOnACardDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class SimulateARefundOnACardDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: SimulateARefundOnACardDefaultApplicationJson5StatusEnum;
    title: string;
    type: SimulateARefundOnACardDefaultApplicationJson5TypeEnum;
}
export declare enum SimulateARefundOnACardDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum SimulateARefundOnACardDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class SimulateARefundOnACardDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: SimulateARefundOnACardDefaultApplicationJson4StatusEnum;
    title: string;
    type: SimulateARefundOnACardDefaultApplicationJson4TypeEnum;
}
export declare enum SimulateARefundOnACardDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SimulateARefundOnACardDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class SimulateARefundOnACardDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: SimulateARefundOnACardDefaultApplicationJson3StatusEnum;
    title: string;
    type: SimulateARefundOnACardDefaultApplicationJson3TypeEnum;
}
export declare enum SimulateARefundOnACardDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateARefundOnACardDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class SimulateARefundOnACardDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: SimulateARefundOnACardDefaultApplicationJson2StatusEnum;
    title: string;
    type: SimulateARefundOnACardDefaultApplicationJson2TypeEnum;
}
export declare enum SimulateARefundOnACardDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SimulateARefundOnACardDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class SimulateARefundOnACardDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: SimulateARefundOnACardDefaultApplicationJson1StatusEnum;
    title: string;
    type: SimulateARefundOnACardDefaultApplicationJson1TypeEnum;
}
export declare class SimulateARefundOnACardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Transaction
     */
    transaction?: shared.Transaction;
}
