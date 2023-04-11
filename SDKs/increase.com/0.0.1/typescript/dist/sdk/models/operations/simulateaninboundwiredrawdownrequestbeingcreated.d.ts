import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson13StatusEnum;
    title: string;
    type: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson13TypeEnum;
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson12StatusEnum;
    title: string;
    type: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson12TypeEnum;
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson11StatusEnum;
    title: string;
    type: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson11TypeEnum;
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson10StatusEnum;
    title: string;
    type: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson10TypeEnum;
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson9StatusEnum;
    title: string;
    type: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson9TypeEnum;
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson8StatusEnum;
    title: string;
    type: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson8TypeEnum;
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson7StatusEnum;
    title: string;
    type: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson7TypeEnum;
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson6StatusEnum;
    title: string;
    type: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson6TypeEnum;
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson5StatusEnum;
    title: string;
    type: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson5TypeEnum;
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson4StatusEnum;
    title: string;
    type: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson4TypeEnum;
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson3StatusEnum;
    title: string;
    type: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson3TypeEnum;
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson2StatusEnum;
    title: string;
    type: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson2TypeEnum;
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson1StatusEnum;
    title: string;
    type: SimulateAnInboundWireDrawdownRequestBeingCreatedDefaultApplicationJson1TypeEnum;
}
export declare class SimulateAnInboundWireDrawdownRequestBeingCreatedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Inbound Wire Drawdown Request
     */
    inboundWireDrawdownRequest?: shared.InboundWireDrawdownRequest;
}
