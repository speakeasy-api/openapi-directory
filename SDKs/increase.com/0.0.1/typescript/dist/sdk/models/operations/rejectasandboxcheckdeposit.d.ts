import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RejectASandboxCheckDepositRequest extends SpeakeasyBase {
    checkDepositId: string;
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RejectASandboxCheckDepositDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RejectASandboxCheckDepositDefaultApplicationJson13StatusEnum;
    title: string;
    type: RejectASandboxCheckDepositDefaultApplicationJson13TypeEnum;
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RejectASandboxCheckDepositDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RejectASandboxCheckDepositDefaultApplicationJson12StatusEnum;
    title: string;
    type: RejectASandboxCheckDepositDefaultApplicationJson12TypeEnum;
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RejectASandboxCheckDepositDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RejectASandboxCheckDepositDefaultApplicationJson11StatusEnum;
    title: string;
    type: RejectASandboxCheckDepositDefaultApplicationJson11TypeEnum;
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RejectASandboxCheckDepositDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RejectASandboxCheckDepositDefaultApplicationJson10StatusEnum;
    title: string;
    type: RejectASandboxCheckDepositDefaultApplicationJson10TypeEnum;
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RejectASandboxCheckDepositDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RejectASandboxCheckDepositDefaultApplicationJson9StatusEnum;
    title: string;
    type: RejectASandboxCheckDepositDefaultApplicationJson9TypeEnum;
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RejectASandboxCheckDepositDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RejectASandboxCheckDepositDefaultApplicationJson8StatusEnum;
    title: string;
    type: RejectASandboxCheckDepositDefaultApplicationJson8TypeEnum;
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RejectASandboxCheckDepositDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RejectASandboxCheckDepositDefaultApplicationJson7StatusEnum;
    title: string;
    type: RejectASandboxCheckDepositDefaultApplicationJson7TypeEnum;
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RejectASandboxCheckDepositDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RejectASandboxCheckDepositDefaultApplicationJson6StatusEnum;
    title: string;
    type: RejectASandboxCheckDepositDefaultApplicationJson6TypeEnum;
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RejectASandboxCheckDepositDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RejectASandboxCheckDepositDefaultApplicationJson5StatusEnum;
    title: string;
    type: RejectASandboxCheckDepositDefaultApplicationJson5TypeEnum;
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RejectASandboxCheckDepositDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RejectASandboxCheckDepositDefaultApplicationJson4StatusEnum;
    title: string;
    type: RejectASandboxCheckDepositDefaultApplicationJson4TypeEnum;
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RejectASandboxCheckDepositDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RejectASandboxCheckDepositDefaultApplicationJson3StatusEnum;
    title: string;
    type: RejectASandboxCheckDepositDefaultApplicationJson3TypeEnum;
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RejectASandboxCheckDepositDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RejectASandboxCheckDepositDefaultApplicationJson2StatusEnum;
    title: string;
    type: RejectASandboxCheckDepositDefaultApplicationJson2TypeEnum;
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RejectASandboxCheckDepositDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RejectASandboxCheckDepositDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RejectASandboxCheckDepositDefaultApplicationJson1StatusEnum;
    title: string;
    type: RejectASandboxCheckDepositDefaultApplicationJson1TypeEnum;
}
export declare class RejectASandboxCheckDepositResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Check Deposit
     */
    checkDeposit?: shared.CheckDeposit;
    /**
     * Error
     */
    error?: any;
}
