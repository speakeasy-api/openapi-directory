import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListWireDrawdownRequestsRequest extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListWireDrawdownRequestsDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListWireDrawdownRequestsDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListWireDrawdownRequestsDefaultApplicationJson13TypeEnum;
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListWireDrawdownRequestsDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListWireDrawdownRequestsDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListWireDrawdownRequestsDefaultApplicationJson12TypeEnum;
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListWireDrawdownRequestsDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListWireDrawdownRequestsDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListWireDrawdownRequestsDefaultApplicationJson11TypeEnum;
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListWireDrawdownRequestsDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListWireDrawdownRequestsDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListWireDrawdownRequestsDefaultApplicationJson10TypeEnum;
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListWireDrawdownRequestsDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListWireDrawdownRequestsDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListWireDrawdownRequestsDefaultApplicationJson9TypeEnum;
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListWireDrawdownRequestsDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListWireDrawdownRequestsDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListWireDrawdownRequestsDefaultApplicationJson8TypeEnum;
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListWireDrawdownRequestsDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListWireDrawdownRequestsDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListWireDrawdownRequestsDefaultApplicationJson7TypeEnum;
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListWireDrawdownRequestsDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListWireDrawdownRequestsDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListWireDrawdownRequestsDefaultApplicationJson6TypeEnum;
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListWireDrawdownRequestsDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListWireDrawdownRequestsDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListWireDrawdownRequestsDefaultApplicationJson5TypeEnum;
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListWireDrawdownRequestsDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListWireDrawdownRequestsDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListWireDrawdownRequestsDefaultApplicationJson4TypeEnum;
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListWireDrawdownRequestsDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListWireDrawdownRequestsDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListWireDrawdownRequestsDefaultApplicationJson3TypeEnum;
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListWireDrawdownRequestsDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListWireDrawdownRequestsDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListWireDrawdownRequestsDefaultApplicationJson2TypeEnum;
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListWireDrawdownRequestsDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListWireDrawdownRequestsDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListWireDrawdownRequestsDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListWireDrawdownRequestsDefaultApplicationJson1TypeEnum;
}
export declare class ListWireDrawdownRequestsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Wire Drawdown Request List
     */
    wireDrawdownRequestList?: shared.WireDrawdownRequestList;
}
