import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListAchTransfersRequest extends SpeakeasyBase {
    accountId?: string;
    createdAtAfter?: Date;
    createdAtBefore?: Date;
    createdAtOnOrAfter?: Date;
    createdAtOnOrBefore?: Date;
    cursor?: string;
    externalAccountId?: string;
    limit?: number;
}
export declare enum ListAchTransfersDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListAchTransfersDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListAchTransfersDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListAchTransfersDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListAchTransfersDefaultApplicationJson13TypeEnum;
}
export declare enum ListAchTransfersDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListAchTransfersDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListAchTransfersDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListAchTransfersDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListAchTransfersDefaultApplicationJson12TypeEnum;
}
export declare enum ListAchTransfersDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListAchTransfersDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListAchTransfersDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListAchTransfersDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListAchTransfersDefaultApplicationJson11TypeEnum;
}
export declare enum ListAchTransfersDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListAchTransfersDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListAchTransfersDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListAchTransfersDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListAchTransfersDefaultApplicationJson10TypeEnum;
}
export declare enum ListAchTransfersDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListAchTransfersDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListAchTransfersDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListAchTransfersDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListAchTransfersDefaultApplicationJson9TypeEnum;
}
export declare enum ListAchTransfersDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListAchTransfersDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListAchTransfersDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListAchTransfersDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListAchTransfersDefaultApplicationJson8TypeEnum;
}
export declare enum ListAchTransfersDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListAchTransfersDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListAchTransfersDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListAchTransfersDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListAchTransfersDefaultApplicationJson7TypeEnum;
}
export declare enum ListAchTransfersDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListAchTransfersDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListAchTransfersDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListAchTransfersDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListAchTransfersDefaultApplicationJson6TypeEnum;
}
export declare enum ListAchTransfersDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListAchTransfersDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListAchTransfersDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListAchTransfersDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListAchTransfersDefaultApplicationJson5TypeEnum;
}
export declare enum ListAchTransfersDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListAchTransfersDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListAchTransfersDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListAchTransfersDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListAchTransfersDefaultApplicationJson4TypeEnum;
}
export declare enum ListAchTransfersDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListAchTransfersDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListAchTransfersDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListAchTransfersDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListAchTransfersDefaultApplicationJson3TypeEnum;
}
export declare enum ListAchTransfersDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListAchTransfersDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListAchTransfersDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListAchTransfersDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListAchTransfersDefaultApplicationJson2TypeEnum;
}
export declare enum ListAchTransfersDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListAchTransfersDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListAchTransfersDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListAchTransfersDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListAchTransfersDefaultApplicationJson1TypeEnum;
}
export declare class ListAchTransfersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ACH Transfer List
     */
    achTransferList?: shared.AchTransferList;
    /**
     * Error
     */
    error?: any;
}
