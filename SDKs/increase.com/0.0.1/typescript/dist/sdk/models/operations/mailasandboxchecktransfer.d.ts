import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MailASandboxCheckTransferRequest extends SpeakeasyBase {
    checkTransferId: string;
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class MailASandboxCheckTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: MailASandboxCheckTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: MailASandboxCheckTransferDefaultApplicationJson13TypeEnum;
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class MailASandboxCheckTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: MailASandboxCheckTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: MailASandboxCheckTransferDefaultApplicationJson12TypeEnum;
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class MailASandboxCheckTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: MailASandboxCheckTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: MailASandboxCheckTransferDefaultApplicationJson11TypeEnum;
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class MailASandboxCheckTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: MailASandboxCheckTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: MailASandboxCheckTransferDefaultApplicationJson10TypeEnum;
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class MailASandboxCheckTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: MailASandboxCheckTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: MailASandboxCheckTransferDefaultApplicationJson9TypeEnum;
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class MailASandboxCheckTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: MailASandboxCheckTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: MailASandboxCheckTransferDefaultApplicationJson8TypeEnum;
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class MailASandboxCheckTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: MailASandboxCheckTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: MailASandboxCheckTransferDefaultApplicationJson7TypeEnum;
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class MailASandboxCheckTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: MailASandboxCheckTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: MailASandboxCheckTransferDefaultApplicationJson6TypeEnum;
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class MailASandboxCheckTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: MailASandboxCheckTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: MailASandboxCheckTransferDefaultApplicationJson5TypeEnum;
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class MailASandboxCheckTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: MailASandboxCheckTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: MailASandboxCheckTransferDefaultApplicationJson4TypeEnum;
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class MailASandboxCheckTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: MailASandboxCheckTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: MailASandboxCheckTransferDefaultApplicationJson3TypeEnum;
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class MailASandboxCheckTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: MailASandboxCheckTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: MailASandboxCheckTransferDefaultApplicationJson2TypeEnum;
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum MailASandboxCheckTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class MailASandboxCheckTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: MailASandboxCheckTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: MailASandboxCheckTransferDefaultApplicationJson1TypeEnum;
}
export declare class MailASandboxCheckTransferResponse extends SpeakeasyBase {
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
