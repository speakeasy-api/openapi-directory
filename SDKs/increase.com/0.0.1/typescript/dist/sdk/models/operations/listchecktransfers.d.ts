import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListCheckTransfersRequest extends SpeakeasyBase {
    accountId?: string;
    createdAtAfter?: Date;
    createdAtBefore?: Date;
    createdAtOnOrAfter?: Date;
    createdAtOnOrBefore?: Date;
    cursor?: string;
    limit?: number;
}
export declare enum ListCheckTransfersDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListCheckTransfersDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListCheckTransfersDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListCheckTransfersDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListCheckTransfersDefaultApplicationJson13TypeEnum;
}
export declare enum ListCheckTransfersDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListCheckTransfersDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListCheckTransfersDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListCheckTransfersDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListCheckTransfersDefaultApplicationJson12TypeEnum;
}
export declare enum ListCheckTransfersDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListCheckTransfersDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListCheckTransfersDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListCheckTransfersDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListCheckTransfersDefaultApplicationJson11TypeEnum;
}
export declare enum ListCheckTransfersDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListCheckTransfersDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListCheckTransfersDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListCheckTransfersDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListCheckTransfersDefaultApplicationJson10TypeEnum;
}
export declare enum ListCheckTransfersDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListCheckTransfersDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListCheckTransfersDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListCheckTransfersDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListCheckTransfersDefaultApplicationJson9TypeEnum;
}
export declare enum ListCheckTransfersDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListCheckTransfersDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListCheckTransfersDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListCheckTransfersDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListCheckTransfersDefaultApplicationJson8TypeEnum;
}
export declare enum ListCheckTransfersDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListCheckTransfersDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListCheckTransfersDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListCheckTransfersDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListCheckTransfersDefaultApplicationJson7TypeEnum;
}
export declare enum ListCheckTransfersDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListCheckTransfersDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListCheckTransfersDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListCheckTransfersDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListCheckTransfersDefaultApplicationJson6TypeEnum;
}
export declare enum ListCheckTransfersDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListCheckTransfersDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListCheckTransfersDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListCheckTransfersDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListCheckTransfersDefaultApplicationJson5TypeEnum;
}
export declare enum ListCheckTransfersDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListCheckTransfersDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListCheckTransfersDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListCheckTransfersDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListCheckTransfersDefaultApplicationJson4TypeEnum;
}
export declare enum ListCheckTransfersDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListCheckTransfersDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListCheckTransfersDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListCheckTransfersDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListCheckTransfersDefaultApplicationJson3TypeEnum;
}
export declare enum ListCheckTransfersDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListCheckTransfersDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListCheckTransfersDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListCheckTransfersDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListCheckTransfersDefaultApplicationJson2TypeEnum;
}
export declare enum ListCheckTransfersDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListCheckTransfersDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListCheckTransfersDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListCheckTransfersDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListCheckTransfersDefaultApplicationJson1TypeEnum;
}
export declare class ListCheckTransfersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Check Transfer List
     */
    checkTransferList?: shared.CheckTransferList;
    /**
     * Error
     */
    error?: any;
}
