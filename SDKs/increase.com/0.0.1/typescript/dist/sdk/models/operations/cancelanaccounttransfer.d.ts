import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CancelAnAccountTransferRequest extends SpeakeasyBase {
    accountTransferId: string;
}
export declare enum CancelAnAccountTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CancelAnAccountTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CancelAnAccountTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CancelAnAccountTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: CancelAnAccountTransferDefaultApplicationJson13TypeEnum;
}
export declare enum CancelAnAccountTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CancelAnAccountTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CancelAnAccountTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CancelAnAccountTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: CancelAnAccountTransferDefaultApplicationJson12TypeEnum;
}
export declare enum CancelAnAccountTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CancelAnAccountTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CancelAnAccountTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CancelAnAccountTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: CancelAnAccountTransferDefaultApplicationJson11TypeEnum;
}
export declare enum CancelAnAccountTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CancelAnAccountTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CancelAnAccountTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CancelAnAccountTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: CancelAnAccountTransferDefaultApplicationJson10TypeEnum;
}
export declare enum CancelAnAccountTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CancelAnAccountTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CancelAnAccountTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CancelAnAccountTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: CancelAnAccountTransferDefaultApplicationJson9TypeEnum;
}
export declare enum CancelAnAccountTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CancelAnAccountTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CancelAnAccountTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CancelAnAccountTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: CancelAnAccountTransferDefaultApplicationJson8TypeEnum;
}
export declare enum CancelAnAccountTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CancelAnAccountTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CancelAnAccountTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CancelAnAccountTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: CancelAnAccountTransferDefaultApplicationJson7TypeEnum;
}
export declare enum CancelAnAccountTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CancelAnAccountTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CancelAnAccountTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CancelAnAccountTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: CancelAnAccountTransferDefaultApplicationJson6TypeEnum;
}
export declare enum CancelAnAccountTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CancelAnAccountTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CancelAnAccountTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CancelAnAccountTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: CancelAnAccountTransferDefaultApplicationJson5TypeEnum;
}
export declare enum CancelAnAccountTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CancelAnAccountTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CancelAnAccountTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CancelAnAccountTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: CancelAnAccountTransferDefaultApplicationJson4TypeEnum;
}
export declare enum CancelAnAccountTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CancelAnAccountTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CancelAnAccountTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CancelAnAccountTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: CancelAnAccountTransferDefaultApplicationJson3TypeEnum;
}
export declare enum CancelAnAccountTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CancelAnAccountTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CancelAnAccountTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CancelAnAccountTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: CancelAnAccountTransferDefaultApplicationJson2TypeEnum;
}
export declare enum CancelAnAccountTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CancelAnAccountTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CancelAnAccountTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CancelAnAccountTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: CancelAnAccountTransferDefaultApplicationJson1TypeEnum;
}
export declare class CancelAnAccountTransferResponse extends SpeakeasyBase {
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
