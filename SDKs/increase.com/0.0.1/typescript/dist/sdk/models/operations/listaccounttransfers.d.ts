import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListAccountTransfersRequest extends SpeakeasyBase {
    accountId?: string;
    createdAtAfter?: Date;
    createdAtBefore?: Date;
    createdAtOnOrAfter?: Date;
    createdAtOnOrBefore?: Date;
    cursor?: string;
    limit?: number;
}
export declare enum ListAccountTransfersDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListAccountTransfersDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListAccountTransfersDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListAccountTransfersDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListAccountTransfersDefaultApplicationJson13TypeEnum;
}
export declare enum ListAccountTransfersDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListAccountTransfersDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListAccountTransfersDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListAccountTransfersDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListAccountTransfersDefaultApplicationJson12TypeEnum;
}
export declare enum ListAccountTransfersDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListAccountTransfersDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListAccountTransfersDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListAccountTransfersDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListAccountTransfersDefaultApplicationJson11TypeEnum;
}
export declare enum ListAccountTransfersDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListAccountTransfersDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListAccountTransfersDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListAccountTransfersDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListAccountTransfersDefaultApplicationJson10TypeEnum;
}
export declare enum ListAccountTransfersDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListAccountTransfersDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListAccountTransfersDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListAccountTransfersDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListAccountTransfersDefaultApplicationJson9TypeEnum;
}
export declare enum ListAccountTransfersDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListAccountTransfersDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListAccountTransfersDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListAccountTransfersDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListAccountTransfersDefaultApplicationJson8TypeEnum;
}
export declare enum ListAccountTransfersDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListAccountTransfersDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListAccountTransfersDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListAccountTransfersDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListAccountTransfersDefaultApplicationJson7TypeEnum;
}
export declare enum ListAccountTransfersDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListAccountTransfersDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListAccountTransfersDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListAccountTransfersDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListAccountTransfersDefaultApplicationJson6TypeEnum;
}
export declare enum ListAccountTransfersDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListAccountTransfersDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListAccountTransfersDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListAccountTransfersDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListAccountTransfersDefaultApplicationJson5TypeEnum;
}
export declare enum ListAccountTransfersDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListAccountTransfersDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListAccountTransfersDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListAccountTransfersDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListAccountTransfersDefaultApplicationJson4TypeEnum;
}
export declare enum ListAccountTransfersDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListAccountTransfersDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListAccountTransfersDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListAccountTransfersDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListAccountTransfersDefaultApplicationJson3TypeEnum;
}
export declare enum ListAccountTransfersDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListAccountTransfersDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListAccountTransfersDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListAccountTransfersDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListAccountTransfersDefaultApplicationJson2TypeEnum;
}
export declare enum ListAccountTransfersDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListAccountTransfersDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListAccountTransfersDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListAccountTransfersDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListAccountTransfersDefaultApplicationJson1TypeEnum;
}
export declare class ListAccountTransfersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Account Transfer List
     */
    accountTransferList?: shared.AccountTransferList;
    /**
     * Error
     */
    error?: any;
}
