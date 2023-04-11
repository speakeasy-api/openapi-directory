import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAnAccountTransferRequest extends SpeakeasyBase {
    accountTransferId: string;
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveAnAccountTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveAnAccountTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveAnAccountTransferDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveAnAccountTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveAnAccountTransferDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveAnAccountTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveAnAccountTransferDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveAnAccountTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveAnAccountTransferDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveAnAccountTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveAnAccountTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveAnAccountTransferDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveAnAccountTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveAnAccountTransferDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveAnAccountTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveAnAccountTransferDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveAnAccountTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveAnAccountTransferDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveAnAccountTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveAnAccountTransferDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveAnAccountTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveAnAccountTransferDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveAnAccountTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveAnAccountTransferDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveAnAccountTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveAnAccountTransferDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnAccountTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveAnAccountTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveAnAccountTransferDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveAnAccountTransferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Account Transfer
     */
    accountTransfer?: shared.AccountTransfer;
    /**
     * Error
     */
    error?: any;
}
