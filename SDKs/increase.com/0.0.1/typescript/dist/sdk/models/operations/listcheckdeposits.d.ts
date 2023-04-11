import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListCheckDepositsRequest extends SpeakeasyBase {
    accountId?: string;
    createdAtAfter?: Date;
    createdAtBefore?: Date;
    createdAtOnOrAfter?: Date;
    createdAtOnOrBefore?: Date;
    cursor?: string;
    limit?: number;
}
export declare enum ListCheckDepositsDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListCheckDepositsDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListCheckDepositsDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListCheckDepositsDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListCheckDepositsDefaultApplicationJson13TypeEnum;
}
export declare enum ListCheckDepositsDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListCheckDepositsDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListCheckDepositsDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListCheckDepositsDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListCheckDepositsDefaultApplicationJson12TypeEnum;
}
export declare enum ListCheckDepositsDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListCheckDepositsDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListCheckDepositsDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListCheckDepositsDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListCheckDepositsDefaultApplicationJson11TypeEnum;
}
export declare enum ListCheckDepositsDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListCheckDepositsDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListCheckDepositsDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListCheckDepositsDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListCheckDepositsDefaultApplicationJson10TypeEnum;
}
export declare enum ListCheckDepositsDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListCheckDepositsDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListCheckDepositsDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListCheckDepositsDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListCheckDepositsDefaultApplicationJson9TypeEnum;
}
export declare enum ListCheckDepositsDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListCheckDepositsDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListCheckDepositsDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListCheckDepositsDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListCheckDepositsDefaultApplicationJson8TypeEnum;
}
export declare enum ListCheckDepositsDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListCheckDepositsDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListCheckDepositsDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListCheckDepositsDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListCheckDepositsDefaultApplicationJson7TypeEnum;
}
export declare enum ListCheckDepositsDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListCheckDepositsDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListCheckDepositsDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListCheckDepositsDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListCheckDepositsDefaultApplicationJson6TypeEnum;
}
export declare enum ListCheckDepositsDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListCheckDepositsDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListCheckDepositsDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListCheckDepositsDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListCheckDepositsDefaultApplicationJson5TypeEnum;
}
export declare enum ListCheckDepositsDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListCheckDepositsDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListCheckDepositsDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListCheckDepositsDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListCheckDepositsDefaultApplicationJson4TypeEnum;
}
export declare enum ListCheckDepositsDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListCheckDepositsDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListCheckDepositsDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListCheckDepositsDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListCheckDepositsDefaultApplicationJson3TypeEnum;
}
export declare enum ListCheckDepositsDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListCheckDepositsDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListCheckDepositsDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListCheckDepositsDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListCheckDepositsDefaultApplicationJson2TypeEnum;
}
export declare enum ListCheckDepositsDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListCheckDepositsDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListCheckDepositsDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListCheckDepositsDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListCheckDepositsDefaultApplicationJson1TypeEnum;
}
export declare class ListCheckDepositsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Check Deposit List
     */
    checkDepositList?: shared.CheckDepositList;
    /**
     * Error
     */
    error?: any;
}
