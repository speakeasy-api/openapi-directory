import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CancelAPendingAchTransferRequest extends SpeakeasyBase {
    achTransferId: string;
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CancelAPendingAchTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CancelAPendingAchTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: CancelAPendingAchTransferDefaultApplicationJson13TypeEnum;
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CancelAPendingAchTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingAchTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: CancelAPendingAchTransferDefaultApplicationJson12TypeEnum;
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CancelAPendingAchTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingAchTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: CancelAPendingAchTransferDefaultApplicationJson11TypeEnum;
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CancelAPendingAchTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingAchTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: CancelAPendingAchTransferDefaultApplicationJson10TypeEnum;
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CancelAPendingAchTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CancelAPendingAchTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: CancelAPendingAchTransferDefaultApplicationJson9TypeEnum;
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CancelAPendingAchTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingAchTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: CancelAPendingAchTransferDefaultApplicationJson8TypeEnum;
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CancelAPendingAchTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingAchTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: CancelAPendingAchTransferDefaultApplicationJson7TypeEnum;
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CancelAPendingAchTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingAchTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: CancelAPendingAchTransferDefaultApplicationJson6TypeEnum;
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CancelAPendingAchTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingAchTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: CancelAPendingAchTransferDefaultApplicationJson5TypeEnum;
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CancelAPendingAchTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingAchTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: CancelAPendingAchTransferDefaultApplicationJson4TypeEnum;
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CancelAPendingAchTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingAchTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: CancelAPendingAchTransferDefaultApplicationJson3TypeEnum;
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CancelAPendingAchTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingAchTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: CancelAPendingAchTransferDefaultApplicationJson2TypeEnum;
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CancelAPendingAchTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CancelAPendingAchTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingAchTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: CancelAPendingAchTransferDefaultApplicationJson1TypeEnum;
}
export declare class CancelAPendingAchTransferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ACH Transfer
     */
    achTransfer?: shared.AchTransfer;
    /**
     * Error
     */
    error?: any;
}
