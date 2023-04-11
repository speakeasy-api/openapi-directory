import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAPendingTransactionRequest extends SpeakeasyBase {
    pendingTransactionId: string;
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveAPendingTransactionDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveAPendingTransactionDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveAPendingTransactionDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveAPendingTransactionDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAPendingTransactionDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveAPendingTransactionDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveAPendingTransactionDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAPendingTransactionDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveAPendingTransactionDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveAPendingTransactionDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAPendingTransactionDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveAPendingTransactionDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveAPendingTransactionDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveAPendingTransactionDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveAPendingTransactionDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveAPendingTransactionDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAPendingTransactionDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveAPendingTransactionDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveAPendingTransactionDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAPendingTransactionDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveAPendingTransactionDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveAPendingTransactionDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAPendingTransactionDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveAPendingTransactionDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveAPendingTransactionDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAPendingTransactionDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveAPendingTransactionDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveAPendingTransactionDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAPendingTransactionDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveAPendingTransactionDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveAPendingTransactionDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAPendingTransactionDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveAPendingTransactionDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveAPendingTransactionDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAPendingTransactionDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveAPendingTransactionDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAPendingTransactionDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveAPendingTransactionDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAPendingTransactionDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveAPendingTransactionDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveAPendingTransactionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Pending Transaction
     */
    pendingTransaction?: shared.PendingTransaction;
}
