import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListAccountStatementsRequest extends SpeakeasyBase {
    accountId?: string;
    cursor?: string;
    limit?: number;
    statementPeriodStartAfter?: Date;
    statementPeriodStartBefore?: Date;
    statementPeriodStartOnOrAfter?: Date;
    statementPeriodStartOnOrBefore?: Date;
}
export declare enum ListAccountStatementsDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListAccountStatementsDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListAccountStatementsDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListAccountStatementsDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListAccountStatementsDefaultApplicationJson13TypeEnum;
}
export declare enum ListAccountStatementsDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListAccountStatementsDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListAccountStatementsDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListAccountStatementsDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListAccountStatementsDefaultApplicationJson12TypeEnum;
}
export declare enum ListAccountStatementsDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListAccountStatementsDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListAccountStatementsDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListAccountStatementsDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListAccountStatementsDefaultApplicationJson11TypeEnum;
}
export declare enum ListAccountStatementsDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListAccountStatementsDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListAccountStatementsDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListAccountStatementsDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListAccountStatementsDefaultApplicationJson10TypeEnum;
}
export declare enum ListAccountStatementsDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListAccountStatementsDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListAccountStatementsDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListAccountStatementsDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListAccountStatementsDefaultApplicationJson9TypeEnum;
}
export declare enum ListAccountStatementsDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListAccountStatementsDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListAccountStatementsDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListAccountStatementsDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListAccountStatementsDefaultApplicationJson8TypeEnum;
}
export declare enum ListAccountStatementsDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListAccountStatementsDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListAccountStatementsDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListAccountStatementsDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListAccountStatementsDefaultApplicationJson7TypeEnum;
}
export declare enum ListAccountStatementsDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListAccountStatementsDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListAccountStatementsDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListAccountStatementsDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListAccountStatementsDefaultApplicationJson6TypeEnum;
}
export declare enum ListAccountStatementsDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListAccountStatementsDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListAccountStatementsDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListAccountStatementsDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListAccountStatementsDefaultApplicationJson5TypeEnum;
}
export declare enum ListAccountStatementsDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListAccountStatementsDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListAccountStatementsDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListAccountStatementsDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListAccountStatementsDefaultApplicationJson4TypeEnum;
}
export declare enum ListAccountStatementsDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListAccountStatementsDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListAccountStatementsDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListAccountStatementsDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListAccountStatementsDefaultApplicationJson3TypeEnum;
}
export declare enum ListAccountStatementsDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListAccountStatementsDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListAccountStatementsDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListAccountStatementsDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListAccountStatementsDefaultApplicationJson2TypeEnum;
}
export declare enum ListAccountStatementsDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListAccountStatementsDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListAccountStatementsDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListAccountStatementsDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListAccountStatementsDefaultApplicationJson1TypeEnum;
}
export declare class ListAccountStatementsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Account Statement List
     */
    accountStatementList?: shared.AccountStatementList;
    /**
     * Error
     */
    error?: any;
}
