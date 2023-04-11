import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListInboundWireDrawdownRequestsRequest extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListInboundWireDrawdownRequestsDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListInboundWireDrawdownRequestsDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListInboundWireDrawdownRequestsDefaultApplicationJson13TypeEnum;
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListInboundWireDrawdownRequestsDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListInboundWireDrawdownRequestsDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListInboundWireDrawdownRequestsDefaultApplicationJson12TypeEnum;
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListInboundWireDrawdownRequestsDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListInboundWireDrawdownRequestsDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListInboundWireDrawdownRequestsDefaultApplicationJson11TypeEnum;
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListInboundWireDrawdownRequestsDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListInboundWireDrawdownRequestsDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListInboundWireDrawdownRequestsDefaultApplicationJson10TypeEnum;
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListInboundWireDrawdownRequestsDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListInboundWireDrawdownRequestsDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListInboundWireDrawdownRequestsDefaultApplicationJson9TypeEnum;
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListInboundWireDrawdownRequestsDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListInboundWireDrawdownRequestsDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListInboundWireDrawdownRequestsDefaultApplicationJson8TypeEnum;
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListInboundWireDrawdownRequestsDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListInboundWireDrawdownRequestsDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListInboundWireDrawdownRequestsDefaultApplicationJson7TypeEnum;
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListInboundWireDrawdownRequestsDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListInboundWireDrawdownRequestsDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListInboundWireDrawdownRequestsDefaultApplicationJson6TypeEnum;
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListInboundWireDrawdownRequestsDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListInboundWireDrawdownRequestsDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListInboundWireDrawdownRequestsDefaultApplicationJson5TypeEnum;
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListInboundWireDrawdownRequestsDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListInboundWireDrawdownRequestsDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListInboundWireDrawdownRequestsDefaultApplicationJson4TypeEnum;
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListInboundWireDrawdownRequestsDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListInboundWireDrawdownRequestsDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListInboundWireDrawdownRequestsDefaultApplicationJson3TypeEnum;
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListInboundWireDrawdownRequestsDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListInboundWireDrawdownRequestsDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListInboundWireDrawdownRequestsDefaultApplicationJson2TypeEnum;
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListInboundWireDrawdownRequestsDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListInboundWireDrawdownRequestsDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListInboundWireDrawdownRequestsDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListInboundWireDrawdownRequestsDefaultApplicationJson1TypeEnum;
}
export declare class ListInboundWireDrawdownRequestsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Inbound Wire Drawdown Request List
     */
    inboundWireDrawdownRequestList?: shared.InboundWireDrawdownRequestList;
}
