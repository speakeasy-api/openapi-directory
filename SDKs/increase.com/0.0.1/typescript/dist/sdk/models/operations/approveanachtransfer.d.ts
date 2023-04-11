import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApproveAnAchTransferRequest extends SpeakeasyBase {
    achTransferId: string;
}
export declare enum ApproveAnAchTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ApproveAnAchTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ApproveAnAchTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ApproveAnAchTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: ApproveAnAchTransferDefaultApplicationJson13TypeEnum;
}
export declare enum ApproveAnAchTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ApproveAnAchTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ApproveAnAchTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ApproveAnAchTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: ApproveAnAchTransferDefaultApplicationJson12TypeEnum;
}
export declare enum ApproveAnAchTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ApproveAnAchTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ApproveAnAchTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ApproveAnAchTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: ApproveAnAchTransferDefaultApplicationJson11TypeEnum;
}
export declare enum ApproveAnAchTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ApproveAnAchTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ApproveAnAchTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ApproveAnAchTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: ApproveAnAchTransferDefaultApplicationJson10TypeEnum;
}
export declare enum ApproveAnAchTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ApproveAnAchTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ApproveAnAchTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ApproveAnAchTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: ApproveAnAchTransferDefaultApplicationJson9TypeEnum;
}
export declare enum ApproveAnAchTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ApproveAnAchTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ApproveAnAchTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ApproveAnAchTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: ApproveAnAchTransferDefaultApplicationJson8TypeEnum;
}
export declare enum ApproveAnAchTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ApproveAnAchTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ApproveAnAchTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ApproveAnAchTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: ApproveAnAchTransferDefaultApplicationJson7TypeEnum;
}
export declare enum ApproveAnAchTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ApproveAnAchTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ApproveAnAchTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ApproveAnAchTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: ApproveAnAchTransferDefaultApplicationJson6TypeEnum;
}
export declare enum ApproveAnAchTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ApproveAnAchTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ApproveAnAchTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ApproveAnAchTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: ApproveAnAchTransferDefaultApplicationJson5TypeEnum;
}
export declare enum ApproveAnAchTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ApproveAnAchTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ApproveAnAchTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ApproveAnAchTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: ApproveAnAchTransferDefaultApplicationJson4TypeEnum;
}
export declare enum ApproveAnAchTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ApproveAnAchTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ApproveAnAchTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ApproveAnAchTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: ApproveAnAchTransferDefaultApplicationJson3TypeEnum;
}
export declare enum ApproveAnAchTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ApproveAnAchTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ApproveAnAchTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ApproveAnAchTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: ApproveAnAchTransferDefaultApplicationJson2TypeEnum;
}
export declare enum ApproveAnAchTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ApproveAnAchTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ApproveAnAchTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ApproveAnAchTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: ApproveAnAchTransferDefaultApplicationJson1TypeEnum;
}
export declare class ApproveAnAchTransferResponse extends SpeakeasyBase {
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
