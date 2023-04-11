import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveACheckTransferRequest extends SpeakeasyBase {
    checkTransferId: string;
}
export declare enum RetrieveACheckTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveACheckTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveACheckTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveACheckTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveACheckTransferDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveACheckTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveACheckTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveACheckTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACheckTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveACheckTransferDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveACheckTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveACheckTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveACheckTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACheckTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveACheckTransferDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveACheckTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveACheckTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveACheckTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACheckTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveACheckTransferDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveACheckTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveACheckTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveACheckTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveACheckTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveACheckTransferDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveACheckTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveACheckTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveACheckTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACheckTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveACheckTransferDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveACheckTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveACheckTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveACheckTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACheckTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveACheckTransferDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveACheckTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveACheckTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveACheckTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACheckTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveACheckTransferDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveACheckTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveACheckTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveACheckTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACheckTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveACheckTransferDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveACheckTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveACheckTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveACheckTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACheckTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveACheckTransferDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveACheckTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveACheckTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveACheckTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACheckTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveACheckTransferDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveACheckTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveACheckTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveACheckTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACheckTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveACheckTransferDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveACheckTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveACheckTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveACheckTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACheckTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveACheckTransferDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveACheckTransferResponse extends SpeakeasyBase {
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
