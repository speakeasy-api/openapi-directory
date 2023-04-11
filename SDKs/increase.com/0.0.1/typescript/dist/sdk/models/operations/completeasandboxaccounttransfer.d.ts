import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CompleteASandboxAccountTransferRequest extends SpeakeasyBase {
    accountTransferId: string;
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CompleteASandboxAccountTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CompleteASandboxAccountTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: CompleteASandboxAccountTransferDefaultApplicationJson13TypeEnum;
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CompleteASandboxAccountTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CompleteASandboxAccountTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: CompleteASandboxAccountTransferDefaultApplicationJson12TypeEnum;
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CompleteASandboxAccountTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CompleteASandboxAccountTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: CompleteASandboxAccountTransferDefaultApplicationJson11TypeEnum;
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CompleteASandboxAccountTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CompleteASandboxAccountTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: CompleteASandboxAccountTransferDefaultApplicationJson10TypeEnum;
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CompleteASandboxAccountTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CompleteASandboxAccountTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: CompleteASandboxAccountTransferDefaultApplicationJson9TypeEnum;
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CompleteASandboxAccountTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CompleteASandboxAccountTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: CompleteASandboxAccountTransferDefaultApplicationJson8TypeEnum;
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CompleteASandboxAccountTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CompleteASandboxAccountTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: CompleteASandboxAccountTransferDefaultApplicationJson7TypeEnum;
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CompleteASandboxAccountTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CompleteASandboxAccountTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: CompleteASandboxAccountTransferDefaultApplicationJson6TypeEnum;
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CompleteASandboxAccountTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CompleteASandboxAccountTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: CompleteASandboxAccountTransferDefaultApplicationJson5TypeEnum;
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CompleteASandboxAccountTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CompleteASandboxAccountTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: CompleteASandboxAccountTransferDefaultApplicationJson4TypeEnum;
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CompleteASandboxAccountTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CompleteASandboxAccountTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: CompleteASandboxAccountTransferDefaultApplicationJson3TypeEnum;
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CompleteASandboxAccountTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CompleteASandboxAccountTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: CompleteASandboxAccountTransferDefaultApplicationJson2TypeEnum;
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CompleteASandboxAccountTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CompleteASandboxAccountTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CompleteASandboxAccountTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: CompleteASandboxAccountTransferDefaultApplicationJson1TypeEnum;
}
export declare class CompleteASandboxAccountTransferResponse extends SpeakeasyBase {
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
