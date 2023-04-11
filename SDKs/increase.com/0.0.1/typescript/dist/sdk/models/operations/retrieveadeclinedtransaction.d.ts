import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveADeclinedTransactionRequest extends SpeakeasyBase {
    declinedTransactionId: string;
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveADeclinedTransactionDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveADeclinedTransactionDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveADeclinedTransactionDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveADeclinedTransactionDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADeclinedTransactionDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveADeclinedTransactionDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveADeclinedTransactionDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADeclinedTransactionDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveADeclinedTransactionDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveADeclinedTransactionDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADeclinedTransactionDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveADeclinedTransactionDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveADeclinedTransactionDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveADeclinedTransactionDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveADeclinedTransactionDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveADeclinedTransactionDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADeclinedTransactionDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveADeclinedTransactionDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveADeclinedTransactionDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADeclinedTransactionDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveADeclinedTransactionDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveADeclinedTransactionDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADeclinedTransactionDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveADeclinedTransactionDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveADeclinedTransactionDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADeclinedTransactionDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveADeclinedTransactionDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveADeclinedTransactionDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADeclinedTransactionDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveADeclinedTransactionDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveADeclinedTransactionDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADeclinedTransactionDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveADeclinedTransactionDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveADeclinedTransactionDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADeclinedTransactionDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveADeclinedTransactionDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveADeclinedTransactionDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveADeclinedTransactionDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADeclinedTransactionDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveADeclinedTransactionDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveADeclinedTransactionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Declined Transaction
     */
    declinedTransaction?: shared.DeclinedTransaction;
    /**
     * Error
     */
    error?: any;
}
