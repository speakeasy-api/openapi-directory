import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAnInboundWireDrawdownRequestRequest extends SpeakeasyBase {
    inboundWireDrawdownRequestId: string;
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveAnInboundWireDrawdownRequestDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveAnInboundWireDrawdownRequestResponse extends SpeakeasyBase {
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
