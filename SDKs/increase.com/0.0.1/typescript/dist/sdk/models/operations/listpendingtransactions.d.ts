import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPendingTransactionsStatusInEnum {
    Pending = "pending",
    Complete = "complete"
}
export declare class ListPendingTransactionsRequest extends SpeakeasyBase {
    accountId?: string;
    cursor?: string;
    limit?: number;
    routeId?: string;
    sourceId?: string;
    statusIn?: ListPendingTransactionsStatusInEnum[];
}
export declare enum ListPendingTransactionsDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListPendingTransactionsDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListPendingTransactionsDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListPendingTransactionsDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListPendingTransactionsDefaultApplicationJson13TypeEnum;
}
export declare enum ListPendingTransactionsDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListPendingTransactionsDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListPendingTransactionsDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListPendingTransactionsDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListPendingTransactionsDefaultApplicationJson12TypeEnum;
}
export declare enum ListPendingTransactionsDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListPendingTransactionsDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListPendingTransactionsDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListPendingTransactionsDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListPendingTransactionsDefaultApplicationJson11TypeEnum;
}
export declare enum ListPendingTransactionsDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListPendingTransactionsDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListPendingTransactionsDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListPendingTransactionsDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListPendingTransactionsDefaultApplicationJson10TypeEnum;
}
export declare enum ListPendingTransactionsDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListPendingTransactionsDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListPendingTransactionsDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListPendingTransactionsDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListPendingTransactionsDefaultApplicationJson9TypeEnum;
}
export declare enum ListPendingTransactionsDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListPendingTransactionsDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListPendingTransactionsDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListPendingTransactionsDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListPendingTransactionsDefaultApplicationJson8TypeEnum;
}
export declare enum ListPendingTransactionsDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListPendingTransactionsDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListPendingTransactionsDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListPendingTransactionsDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListPendingTransactionsDefaultApplicationJson7TypeEnum;
}
export declare enum ListPendingTransactionsDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListPendingTransactionsDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListPendingTransactionsDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListPendingTransactionsDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListPendingTransactionsDefaultApplicationJson6TypeEnum;
}
export declare enum ListPendingTransactionsDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListPendingTransactionsDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListPendingTransactionsDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListPendingTransactionsDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListPendingTransactionsDefaultApplicationJson5TypeEnum;
}
export declare enum ListPendingTransactionsDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListPendingTransactionsDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListPendingTransactionsDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListPendingTransactionsDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListPendingTransactionsDefaultApplicationJson4TypeEnum;
}
export declare enum ListPendingTransactionsDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListPendingTransactionsDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListPendingTransactionsDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListPendingTransactionsDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListPendingTransactionsDefaultApplicationJson3TypeEnum;
}
export declare enum ListPendingTransactionsDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListPendingTransactionsDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListPendingTransactionsDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListPendingTransactionsDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListPendingTransactionsDefaultApplicationJson2TypeEnum;
}
export declare enum ListPendingTransactionsDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListPendingTransactionsDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListPendingTransactionsDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListPendingTransactionsDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListPendingTransactionsDefaultApplicationJson1TypeEnum;
}
export declare class ListPendingTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Pending Transaction List
     */
    pendingTransactionList?: shared.PendingTransactionList;
}
