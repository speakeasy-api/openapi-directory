import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DepositASandboxCheckTransferRequest extends SpeakeasyBase {
    checkTransferId: string;
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class DepositASandboxCheckTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: DepositASandboxCheckTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: DepositASandboxCheckTransferDefaultApplicationJson13TypeEnum;
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class DepositASandboxCheckTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: DepositASandboxCheckTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: DepositASandboxCheckTransferDefaultApplicationJson12TypeEnum;
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class DepositASandboxCheckTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: DepositASandboxCheckTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: DepositASandboxCheckTransferDefaultApplicationJson11TypeEnum;
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class DepositASandboxCheckTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: DepositASandboxCheckTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: DepositASandboxCheckTransferDefaultApplicationJson10TypeEnum;
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class DepositASandboxCheckTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: DepositASandboxCheckTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: DepositASandboxCheckTransferDefaultApplicationJson9TypeEnum;
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class DepositASandboxCheckTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: DepositASandboxCheckTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: DepositASandboxCheckTransferDefaultApplicationJson8TypeEnum;
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class DepositASandboxCheckTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: DepositASandboxCheckTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: DepositASandboxCheckTransferDefaultApplicationJson7TypeEnum;
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class DepositASandboxCheckTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: DepositASandboxCheckTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: DepositASandboxCheckTransferDefaultApplicationJson6TypeEnum;
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class DepositASandboxCheckTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: DepositASandboxCheckTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: DepositASandboxCheckTransferDefaultApplicationJson5TypeEnum;
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class DepositASandboxCheckTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: DepositASandboxCheckTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: DepositASandboxCheckTransferDefaultApplicationJson4TypeEnum;
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class DepositASandboxCheckTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: DepositASandboxCheckTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: DepositASandboxCheckTransferDefaultApplicationJson3TypeEnum;
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class DepositASandboxCheckTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: DepositASandboxCheckTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: DepositASandboxCheckTransferDefaultApplicationJson2TypeEnum;
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum DepositASandboxCheckTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class DepositASandboxCheckTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: DepositASandboxCheckTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: DepositASandboxCheckTransferDefaultApplicationJson1TypeEnum;
}
export declare class DepositASandboxCheckTransferResponse extends SpeakeasyBase {
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
