import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListRoutingNumbersRequest extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
    routingNumber: string;
}
export declare enum ListRoutingNumbersDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListRoutingNumbersDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListRoutingNumbersDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListRoutingNumbersDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListRoutingNumbersDefaultApplicationJson13TypeEnum;
}
export declare enum ListRoutingNumbersDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListRoutingNumbersDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListRoutingNumbersDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListRoutingNumbersDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListRoutingNumbersDefaultApplicationJson12TypeEnum;
}
export declare enum ListRoutingNumbersDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListRoutingNumbersDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListRoutingNumbersDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListRoutingNumbersDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListRoutingNumbersDefaultApplicationJson11TypeEnum;
}
export declare enum ListRoutingNumbersDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListRoutingNumbersDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListRoutingNumbersDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListRoutingNumbersDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListRoutingNumbersDefaultApplicationJson10TypeEnum;
}
export declare enum ListRoutingNumbersDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListRoutingNumbersDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListRoutingNumbersDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListRoutingNumbersDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListRoutingNumbersDefaultApplicationJson9TypeEnum;
}
export declare enum ListRoutingNumbersDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListRoutingNumbersDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListRoutingNumbersDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListRoutingNumbersDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListRoutingNumbersDefaultApplicationJson8TypeEnum;
}
export declare enum ListRoutingNumbersDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListRoutingNumbersDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListRoutingNumbersDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListRoutingNumbersDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListRoutingNumbersDefaultApplicationJson7TypeEnum;
}
export declare enum ListRoutingNumbersDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListRoutingNumbersDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListRoutingNumbersDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListRoutingNumbersDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListRoutingNumbersDefaultApplicationJson6TypeEnum;
}
export declare enum ListRoutingNumbersDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListRoutingNumbersDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListRoutingNumbersDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListRoutingNumbersDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListRoutingNumbersDefaultApplicationJson5TypeEnum;
}
export declare enum ListRoutingNumbersDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListRoutingNumbersDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListRoutingNumbersDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListRoutingNumbersDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListRoutingNumbersDefaultApplicationJson4TypeEnum;
}
export declare enum ListRoutingNumbersDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListRoutingNumbersDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListRoutingNumbersDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListRoutingNumbersDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListRoutingNumbersDefaultApplicationJson3TypeEnum;
}
export declare enum ListRoutingNumbersDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListRoutingNumbersDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListRoutingNumbersDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListRoutingNumbersDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListRoutingNumbersDefaultApplicationJson2TypeEnum;
}
export declare enum ListRoutingNumbersDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListRoutingNumbersDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListRoutingNumbersDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListRoutingNumbersDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListRoutingNumbersDefaultApplicationJson1TypeEnum;
}
export declare class ListRoutingNumbersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Routing Number List
     */
    routingNumberList?: shared.RoutingNumberList;
}
