import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAnAchTransferRequest extends SpeakeasyBase {
    achTransferId: string;
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveAnAchTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveAnAchTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveAnAchTransferDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveAnAchTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAchTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveAnAchTransferDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveAnAchTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAchTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveAnAchTransferDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveAnAchTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAchTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveAnAchTransferDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveAnAchTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveAnAchTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveAnAchTransferDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveAnAchTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAchTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveAnAchTransferDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveAnAchTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAchTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveAnAchTransferDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveAnAchTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAchTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveAnAchTransferDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveAnAchTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAchTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveAnAchTransferDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveAnAchTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAchTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveAnAchTransferDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveAnAchTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAchTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveAnAchTransferDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveAnAchTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAchTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveAnAchTransferDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnAchTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveAnAchTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAchTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveAnAchTransferDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveAnAchTransferResponse extends SpeakeasyBase {
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
