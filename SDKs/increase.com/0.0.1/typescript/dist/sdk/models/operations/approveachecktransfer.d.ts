import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApproveACheckTransferRequest extends SpeakeasyBase {
    checkTransferId: string;
}
export declare enum ApproveACheckTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ApproveACheckTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ApproveACheckTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ApproveACheckTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: ApproveACheckTransferDefaultApplicationJson13TypeEnum;
}
export declare enum ApproveACheckTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ApproveACheckTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ApproveACheckTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ApproveACheckTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: ApproveACheckTransferDefaultApplicationJson12TypeEnum;
}
export declare enum ApproveACheckTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ApproveACheckTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ApproveACheckTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ApproveACheckTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: ApproveACheckTransferDefaultApplicationJson11TypeEnum;
}
export declare enum ApproveACheckTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ApproveACheckTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ApproveACheckTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ApproveACheckTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: ApproveACheckTransferDefaultApplicationJson10TypeEnum;
}
export declare enum ApproveACheckTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ApproveACheckTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ApproveACheckTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ApproveACheckTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: ApproveACheckTransferDefaultApplicationJson9TypeEnum;
}
export declare enum ApproveACheckTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ApproveACheckTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ApproveACheckTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ApproveACheckTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: ApproveACheckTransferDefaultApplicationJson8TypeEnum;
}
export declare enum ApproveACheckTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ApproveACheckTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ApproveACheckTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ApproveACheckTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: ApproveACheckTransferDefaultApplicationJson7TypeEnum;
}
export declare enum ApproveACheckTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ApproveACheckTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ApproveACheckTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ApproveACheckTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: ApproveACheckTransferDefaultApplicationJson6TypeEnum;
}
export declare enum ApproveACheckTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ApproveACheckTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ApproveACheckTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ApproveACheckTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: ApproveACheckTransferDefaultApplicationJson5TypeEnum;
}
export declare enum ApproveACheckTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ApproveACheckTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ApproveACheckTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ApproveACheckTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: ApproveACheckTransferDefaultApplicationJson4TypeEnum;
}
export declare enum ApproveACheckTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ApproveACheckTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ApproveACheckTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ApproveACheckTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: ApproveACheckTransferDefaultApplicationJson3TypeEnum;
}
export declare enum ApproveACheckTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ApproveACheckTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ApproveACheckTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ApproveACheckTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: ApproveACheckTransferDefaultApplicationJson2TypeEnum;
}
export declare enum ApproveACheckTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ApproveACheckTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ApproveACheckTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ApproveACheckTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: ApproveACheckTransferDefaultApplicationJson1TypeEnum;
}
export declare class ApproveACheckTransferResponse extends SpeakeasyBase {
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
