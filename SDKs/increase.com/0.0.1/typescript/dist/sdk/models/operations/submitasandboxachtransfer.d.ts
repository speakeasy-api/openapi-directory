import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubmitASandboxAchTransferRequest extends SpeakeasyBase {
    achTransferId: string;
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class SubmitASandboxAchTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: SubmitASandboxAchTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: SubmitASandboxAchTransferDefaultApplicationJson13TypeEnum;
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class SubmitASandboxAchTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxAchTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: SubmitASandboxAchTransferDefaultApplicationJson12TypeEnum;
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class SubmitASandboxAchTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxAchTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: SubmitASandboxAchTransferDefaultApplicationJson11TypeEnum;
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class SubmitASandboxAchTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxAchTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: SubmitASandboxAchTransferDefaultApplicationJson10TypeEnum;
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class SubmitASandboxAchTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: SubmitASandboxAchTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: SubmitASandboxAchTransferDefaultApplicationJson9TypeEnum;
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class SubmitASandboxAchTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxAchTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: SubmitASandboxAchTransferDefaultApplicationJson8TypeEnum;
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class SubmitASandboxAchTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxAchTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: SubmitASandboxAchTransferDefaultApplicationJson7TypeEnum;
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class SubmitASandboxAchTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxAchTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: SubmitASandboxAchTransferDefaultApplicationJson6TypeEnum;
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class SubmitASandboxAchTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxAchTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: SubmitASandboxAchTransferDefaultApplicationJson5TypeEnum;
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class SubmitASandboxAchTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxAchTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: SubmitASandboxAchTransferDefaultApplicationJson4TypeEnum;
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class SubmitASandboxAchTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxAchTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: SubmitASandboxAchTransferDefaultApplicationJson3TypeEnum;
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class SubmitASandboxAchTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxAchTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: SubmitASandboxAchTransferDefaultApplicationJson2TypeEnum;
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SubmitASandboxAchTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class SubmitASandboxAchTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxAchTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: SubmitASandboxAchTransferDefaultApplicationJson1TypeEnum;
}
export declare class SubmitASandboxAchTransferResponse extends SpeakeasyBase {
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
