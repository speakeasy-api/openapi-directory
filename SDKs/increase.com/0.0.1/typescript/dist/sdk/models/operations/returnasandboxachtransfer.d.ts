import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReturnASandboxAchTransferRequest extends SpeakeasyBase {
    achTransferId: string;
    returnASandboxAchTransferParameters: shared.ReturnASandboxAchTransferParameters;
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ReturnASandboxAchTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ReturnASandboxAchTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: ReturnASandboxAchTransferDefaultApplicationJson13TypeEnum;
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ReturnASandboxAchTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ReturnASandboxAchTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: ReturnASandboxAchTransferDefaultApplicationJson12TypeEnum;
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ReturnASandboxAchTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ReturnASandboxAchTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: ReturnASandboxAchTransferDefaultApplicationJson11TypeEnum;
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ReturnASandboxAchTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ReturnASandboxAchTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: ReturnASandboxAchTransferDefaultApplicationJson10TypeEnum;
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ReturnASandboxAchTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ReturnASandboxAchTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: ReturnASandboxAchTransferDefaultApplicationJson9TypeEnum;
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ReturnASandboxAchTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ReturnASandboxAchTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: ReturnASandboxAchTransferDefaultApplicationJson8TypeEnum;
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ReturnASandboxAchTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ReturnASandboxAchTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: ReturnASandboxAchTransferDefaultApplicationJson7TypeEnum;
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ReturnASandboxAchTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ReturnASandboxAchTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: ReturnASandboxAchTransferDefaultApplicationJson6TypeEnum;
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ReturnASandboxAchTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ReturnASandboxAchTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: ReturnASandboxAchTransferDefaultApplicationJson5TypeEnum;
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ReturnASandboxAchTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ReturnASandboxAchTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: ReturnASandboxAchTransferDefaultApplicationJson4TypeEnum;
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ReturnASandboxAchTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ReturnASandboxAchTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: ReturnASandboxAchTransferDefaultApplicationJson3TypeEnum;
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ReturnASandboxAchTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ReturnASandboxAchTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: ReturnASandboxAchTransferDefaultApplicationJson2TypeEnum;
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ReturnASandboxAchTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ReturnASandboxAchTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ReturnASandboxAchTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: ReturnASandboxAchTransferDefaultApplicationJson1TypeEnum;
}
export declare class ReturnASandboxAchTransferResponse extends SpeakeasyBase {
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
