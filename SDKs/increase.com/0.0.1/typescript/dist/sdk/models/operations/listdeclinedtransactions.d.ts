import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListDeclinedTransactionsRequest extends SpeakeasyBase {
    accountId?: string;
    createdAtAfter?: Date;
    createdAtBefore?: Date;
    createdAtOnOrAfter?: Date;
    createdAtOnOrBefore?: Date;
    cursor?: string;
    limit?: number;
    routeId?: string;
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListDeclinedTransactionsDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListDeclinedTransactionsDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListDeclinedTransactionsDefaultApplicationJson13TypeEnum;
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListDeclinedTransactionsDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListDeclinedTransactionsDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListDeclinedTransactionsDefaultApplicationJson12TypeEnum;
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListDeclinedTransactionsDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListDeclinedTransactionsDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListDeclinedTransactionsDefaultApplicationJson11TypeEnum;
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListDeclinedTransactionsDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListDeclinedTransactionsDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListDeclinedTransactionsDefaultApplicationJson10TypeEnum;
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListDeclinedTransactionsDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListDeclinedTransactionsDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListDeclinedTransactionsDefaultApplicationJson9TypeEnum;
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListDeclinedTransactionsDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListDeclinedTransactionsDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListDeclinedTransactionsDefaultApplicationJson8TypeEnum;
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListDeclinedTransactionsDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListDeclinedTransactionsDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListDeclinedTransactionsDefaultApplicationJson7TypeEnum;
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListDeclinedTransactionsDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListDeclinedTransactionsDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListDeclinedTransactionsDefaultApplicationJson6TypeEnum;
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListDeclinedTransactionsDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListDeclinedTransactionsDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListDeclinedTransactionsDefaultApplicationJson5TypeEnum;
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListDeclinedTransactionsDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListDeclinedTransactionsDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListDeclinedTransactionsDefaultApplicationJson4TypeEnum;
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListDeclinedTransactionsDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListDeclinedTransactionsDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListDeclinedTransactionsDefaultApplicationJson3TypeEnum;
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListDeclinedTransactionsDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListDeclinedTransactionsDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListDeclinedTransactionsDefaultApplicationJson2TypeEnum;
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListDeclinedTransactionsDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListDeclinedTransactionsDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListDeclinedTransactionsDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListDeclinedTransactionsDefaultApplicationJson1TypeEnum;
}
export declare class ListDeclinedTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Declined Transaction List
     */
    declinedTransactionList?: shared.DeclinedTransactionList;
    /**
     * Error
     */
    error?: any;
}
