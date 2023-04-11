import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAnInboundAchTransferReturnRequest extends SpeakeasyBase {
    inboundAchTransferReturnId: string;
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveAnInboundAchTransferReturnDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveAnInboundAchTransferReturnDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveAnInboundAchTransferReturnDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveAnInboundAchTransferReturnDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnInboundAchTransferReturnDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveAnInboundAchTransferReturnDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveAnInboundAchTransferReturnDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnInboundAchTransferReturnDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveAnInboundAchTransferReturnDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveAnInboundAchTransferReturnDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnInboundAchTransferReturnDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveAnInboundAchTransferReturnDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveAnInboundAchTransferReturnDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveAnInboundAchTransferReturnDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveAnInboundAchTransferReturnDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveAnInboundAchTransferReturnDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnInboundAchTransferReturnDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveAnInboundAchTransferReturnDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveAnInboundAchTransferReturnDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnInboundAchTransferReturnDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveAnInboundAchTransferReturnDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveAnInboundAchTransferReturnDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnInboundAchTransferReturnDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveAnInboundAchTransferReturnDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveAnInboundAchTransferReturnDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnInboundAchTransferReturnDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveAnInboundAchTransferReturnDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveAnInboundAchTransferReturnDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnInboundAchTransferReturnDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveAnInboundAchTransferReturnDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveAnInboundAchTransferReturnDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnInboundAchTransferReturnDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveAnInboundAchTransferReturnDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveAnInboundAchTransferReturnDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnInboundAchTransferReturnDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveAnInboundAchTransferReturnDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnInboundAchTransferReturnDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveAnInboundAchTransferReturnDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnInboundAchTransferReturnDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveAnInboundAchTransferReturnDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveAnInboundAchTransferReturnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Inbound ACH Transfer Return
     */
    inboundAchTransferReturn?: shared.InboundAchTransferReturn;
}
