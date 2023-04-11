import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListLimitsRequest extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
    modelId?: string;
    status?: string;
}
export declare enum ListLimitsDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListLimitsDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListLimitsDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListLimitsDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListLimitsDefaultApplicationJson13TypeEnum;
}
export declare enum ListLimitsDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListLimitsDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListLimitsDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListLimitsDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListLimitsDefaultApplicationJson12TypeEnum;
}
export declare enum ListLimitsDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListLimitsDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListLimitsDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListLimitsDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListLimitsDefaultApplicationJson11TypeEnum;
}
export declare enum ListLimitsDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListLimitsDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListLimitsDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListLimitsDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListLimitsDefaultApplicationJson10TypeEnum;
}
export declare enum ListLimitsDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListLimitsDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListLimitsDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListLimitsDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListLimitsDefaultApplicationJson9TypeEnum;
}
export declare enum ListLimitsDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListLimitsDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListLimitsDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListLimitsDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListLimitsDefaultApplicationJson8TypeEnum;
}
export declare enum ListLimitsDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListLimitsDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListLimitsDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListLimitsDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListLimitsDefaultApplicationJson7TypeEnum;
}
export declare enum ListLimitsDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListLimitsDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListLimitsDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListLimitsDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListLimitsDefaultApplicationJson6TypeEnum;
}
export declare enum ListLimitsDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListLimitsDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListLimitsDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListLimitsDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListLimitsDefaultApplicationJson5TypeEnum;
}
export declare enum ListLimitsDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListLimitsDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListLimitsDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListLimitsDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListLimitsDefaultApplicationJson4TypeEnum;
}
export declare enum ListLimitsDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListLimitsDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListLimitsDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListLimitsDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListLimitsDefaultApplicationJson3TypeEnum;
}
export declare enum ListLimitsDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListLimitsDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListLimitsDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListLimitsDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListLimitsDefaultApplicationJson2TypeEnum;
}
export declare enum ListLimitsDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListLimitsDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListLimitsDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListLimitsDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListLimitsDefaultApplicationJson1TypeEnum;
}
export declare class ListLimitsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Limit List
     */
    limitList?: shared.LimitList;
}
