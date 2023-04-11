import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class SimulateSettlingACardAuthorizationDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: SimulateSettlingACardAuthorizationDefaultApplicationJson13StatusEnum;
    title: string;
    type: SimulateSettlingACardAuthorizationDefaultApplicationJson13TypeEnum;
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class SimulateSettlingACardAuthorizationDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: SimulateSettlingACardAuthorizationDefaultApplicationJson12StatusEnum;
    title: string;
    type: SimulateSettlingACardAuthorizationDefaultApplicationJson12TypeEnum;
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class SimulateSettlingACardAuthorizationDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: SimulateSettlingACardAuthorizationDefaultApplicationJson11StatusEnum;
    title: string;
    type: SimulateSettlingACardAuthorizationDefaultApplicationJson11TypeEnum;
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class SimulateSettlingACardAuthorizationDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: SimulateSettlingACardAuthorizationDefaultApplicationJson10StatusEnum;
    title: string;
    type: SimulateSettlingACardAuthorizationDefaultApplicationJson10TypeEnum;
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class SimulateSettlingACardAuthorizationDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: SimulateSettlingACardAuthorizationDefaultApplicationJson9StatusEnum;
    title: string;
    type: SimulateSettlingACardAuthorizationDefaultApplicationJson9TypeEnum;
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class SimulateSettlingACardAuthorizationDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: SimulateSettlingACardAuthorizationDefaultApplicationJson8StatusEnum;
    title: string;
    type: SimulateSettlingACardAuthorizationDefaultApplicationJson8TypeEnum;
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class SimulateSettlingACardAuthorizationDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: SimulateSettlingACardAuthorizationDefaultApplicationJson7StatusEnum;
    title: string;
    type: SimulateSettlingACardAuthorizationDefaultApplicationJson7TypeEnum;
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class SimulateSettlingACardAuthorizationDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: SimulateSettlingACardAuthorizationDefaultApplicationJson6StatusEnum;
    title: string;
    type: SimulateSettlingACardAuthorizationDefaultApplicationJson6TypeEnum;
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class SimulateSettlingACardAuthorizationDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: SimulateSettlingACardAuthorizationDefaultApplicationJson5StatusEnum;
    title: string;
    type: SimulateSettlingACardAuthorizationDefaultApplicationJson5TypeEnum;
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class SimulateSettlingACardAuthorizationDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: SimulateSettlingACardAuthorizationDefaultApplicationJson4StatusEnum;
    title: string;
    type: SimulateSettlingACardAuthorizationDefaultApplicationJson4TypeEnum;
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class SimulateSettlingACardAuthorizationDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: SimulateSettlingACardAuthorizationDefaultApplicationJson3StatusEnum;
    title: string;
    type: SimulateSettlingACardAuthorizationDefaultApplicationJson3TypeEnum;
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class SimulateSettlingACardAuthorizationDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: SimulateSettlingACardAuthorizationDefaultApplicationJson2StatusEnum;
    title: string;
    type: SimulateSettlingACardAuthorizationDefaultApplicationJson2TypeEnum;
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SimulateSettlingACardAuthorizationDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class SimulateSettlingACardAuthorizationDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: SimulateSettlingACardAuthorizationDefaultApplicationJson1StatusEnum;
    title: string;
    type: SimulateSettlingACardAuthorizationDefaultApplicationJson1TypeEnum;
}
export declare class SimulateSettlingACardAuthorizationResponse extends SpeakeasyBase {
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
