import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveATransactionRequest extends SpeakeasyBase {
    transactionId: string;
}
export declare enum RetrieveATransactionDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveATransactionDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveATransactionDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveATransactionDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveATransactionDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveATransactionDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveATransactionDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveATransactionDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveATransactionDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveATransactionDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveATransactionDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveATransactionDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveATransactionDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveATransactionDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveATransactionDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveATransactionDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveATransactionDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveATransactionDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveATransactionDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveATransactionDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveATransactionDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveATransactionDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveATransactionDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveATransactionDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveATransactionDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveATransactionDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveATransactionDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveATransactionDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveATransactionDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveATransactionDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveATransactionDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveATransactionDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveATransactionDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveATransactionDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveATransactionDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveATransactionDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveATransactionDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveATransactionDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveATransactionDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveATransactionDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveATransactionDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveATransactionDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveATransactionDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveATransactionDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveATransactionDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveATransactionDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveATransactionDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveATransactionDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveATransactionDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveATransactionDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveATransactionDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveATransactionDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveATransactionDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveATransactionDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveATransactionDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveATransactionDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveATransactionDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveATransactionDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveATransactionDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveATransactionDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveATransactionDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveATransactionDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveATransactionDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveATransactionDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveATransactionDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveATransactionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Transaction
     */
    transaction?: shared.Transaction;
}
