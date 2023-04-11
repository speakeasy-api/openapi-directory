import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListInboundAchTransferReturnsRequest extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListInboundAchTransferReturnsDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListInboundAchTransferReturnsDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListInboundAchTransferReturnsDefaultApplicationJson13TypeEnum;
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListInboundAchTransferReturnsDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListInboundAchTransferReturnsDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListInboundAchTransferReturnsDefaultApplicationJson12TypeEnum;
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListInboundAchTransferReturnsDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListInboundAchTransferReturnsDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListInboundAchTransferReturnsDefaultApplicationJson11TypeEnum;
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListInboundAchTransferReturnsDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListInboundAchTransferReturnsDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListInboundAchTransferReturnsDefaultApplicationJson10TypeEnum;
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListInboundAchTransferReturnsDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListInboundAchTransferReturnsDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListInboundAchTransferReturnsDefaultApplicationJson9TypeEnum;
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListInboundAchTransferReturnsDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListInboundAchTransferReturnsDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListInboundAchTransferReturnsDefaultApplicationJson8TypeEnum;
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListInboundAchTransferReturnsDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListInboundAchTransferReturnsDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListInboundAchTransferReturnsDefaultApplicationJson7TypeEnum;
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListInboundAchTransferReturnsDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListInboundAchTransferReturnsDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListInboundAchTransferReturnsDefaultApplicationJson6TypeEnum;
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListInboundAchTransferReturnsDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListInboundAchTransferReturnsDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListInboundAchTransferReturnsDefaultApplicationJson5TypeEnum;
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListInboundAchTransferReturnsDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListInboundAchTransferReturnsDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListInboundAchTransferReturnsDefaultApplicationJson4TypeEnum;
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListInboundAchTransferReturnsDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListInboundAchTransferReturnsDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListInboundAchTransferReturnsDefaultApplicationJson3TypeEnum;
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListInboundAchTransferReturnsDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListInboundAchTransferReturnsDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListInboundAchTransferReturnsDefaultApplicationJson2TypeEnum;
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListInboundAchTransferReturnsDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListInboundAchTransferReturnsDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListInboundAchTransferReturnsDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListInboundAchTransferReturnsDefaultApplicationJson1TypeEnum;
}
export declare class ListInboundAchTransferReturnsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Inbound ACH Transfer Return List
     */
    inboundAchTransferReturnList?: shared.InboundAchTransferReturnList;
}
