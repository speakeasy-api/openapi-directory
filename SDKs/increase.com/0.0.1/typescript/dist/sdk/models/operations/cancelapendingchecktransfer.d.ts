import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CancelAPendingCheckTransferRequest extends SpeakeasyBase {
    checkTransferId: string;
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CancelAPendingCheckTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CancelAPendingCheckTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: CancelAPendingCheckTransferDefaultApplicationJson13TypeEnum;
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CancelAPendingCheckTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingCheckTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: CancelAPendingCheckTransferDefaultApplicationJson12TypeEnum;
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CancelAPendingCheckTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingCheckTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: CancelAPendingCheckTransferDefaultApplicationJson11TypeEnum;
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CancelAPendingCheckTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingCheckTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: CancelAPendingCheckTransferDefaultApplicationJson10TypeEnum;
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CancelAPendingCheckTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CancelAPendingCheckTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: CancelAPendingCheckTransferDefaultApplicationJson9TypeEnum;
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CancelAPendingCheckTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingCheckTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: CancelAPendingCheckTransferDefaultApplicationJson8TypeEnum;
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CancelAPendingCheckTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingCheckTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: CancelAPendingCheckTransferDefaultApplicationJson7TypeEnum;
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CancelAPendingCheckTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingCheckTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: CancelAPendingCheckTransferDefaultApplicationJson6TypeEnum;
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CancelAPendingCheckTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingCheckTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: CancelAPendingCheckTransferDefaultApplicationJson5TypeEnum;
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CancelAPendingCheckTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingCheckTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: CancelAPendingCheckTransferDefaultApplicationJson4TypeEnum;
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CancelAPendingCheckTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingCheckTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: CancelAPendingCheckTransferDefaultApplicationJson3TypeEnum;
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CancelAPendingCheckTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingCheckTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: CancelAPendingCheckTransferDefaultApplicationJson2TypeEnum;
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CancelAPendingCheckTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CancelAPendingCheckTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingCheckTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: CancelAPendingCheckTransferDefaultApplicationJson1TypeEnum;
}
export declare class CancelAPendingCheckTransferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Check Transfer
     */
    checkTransfer?: shared.CheckTransfer;
    /**
     * Error
     */
    error?: any;
}
