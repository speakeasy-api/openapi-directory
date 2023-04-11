import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReturnASandboxCheckDepositRequest extends SpeakeasyBase {
    checkDepositId: string;
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ReturnASandboxCheckDepositDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ReturnASandboxCheckDepositDefaultApplicationJson13StatusEnum;
    title: string;
    type: ReturnASandboxCheckDepositDefaultApplicationJson13TypeEnum;
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ReturnASandboxCheckDepositDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ReturnASandboxCheckDepositDefaultApplicationJson12StatusEnum;
    title: string;
    type: ReturnASandboxCheckDepositDefaultApplicationJson12TypeEnum;
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ReturnASandboxCheckDepositDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ReturnASandboxCheckDepositDefaultApplicationJson11StatusEnum;
    title: string;
    type: ReturnASandboxCheckDepositDefaultApplicationJson11TypeEnum;
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ReturnASandboxCheckDepositDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ReturnASandboxCheckDepositDefaultApplicationJson10StatusEnum;
    title: string;
    type: ReturnASandboxCheckDepositDefaultApplicationJson10TypeEnum;
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ReturnASandboxCheckDepositDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ReturnASandboxCheckDepositDefaultApplicationJson9StatusEnum;
    title: string;
    type: ReturnASandboxCheckDepositDefaultApplicationJson9TypeEnum;
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ReturnASandboxCheckDepositDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ReturnASandboxCheckDepositDefaultApplicationJson8StatusEnum;
    title: string;
    type: ReturnASandboxCheckDepositDefaultApplicationJson8TypeEnum;
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ReturnASandboxCheckDepositDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ReturnASandboxCheckDepositDefaultApplicationJson7StatusEnum;
    title: string;
    type: ReturnASandboxCheckDepositDefaultApplicationJson7TypeEnum;
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ReturnASandboxCheckDepositDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ReturnASandboxCheckDepositDefaultApplicationJson6StatusEnum;
    title: string;
    type: ReturnASandboxCheckDepositDefaultApplicationJson6TypeEnum;
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ReturnASandboxCheckDepositDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ReturnASandboxCheckDepositDefaultApplicationJson5StatusEnum;
    title: string;
    type: ReturnASandboxCheckDepositDefaultApplicationJson5TypeEnum;
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ReturnASandboxCheckDepositDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ReturnASandboxCheckDepositDefaultApplicationJson4StatusEnum;
    title: string;
    type: ReturnASandboxCheckDepositDefaultApplicationJson4TypeEnum;
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ReturnASandboxCheckDepositDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ReturnASandboxCheckDepositDefaultApplicationJson3StatusEnum;
    title: string;
    type: ReturnASandboxCheckDepositDefaultApplicationJson3TypeEnum;
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ReturnASandboxCheckDepositDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ReturnASandboxCheckDepositDefaultApplicationJson2StatusEnum;
    title: string;
    type: ReturnASandboxCheckDepositDefaultApplicationJson2TypeEnum;
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ReturnASandboxCheckDepositDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ReturnASandboxCheckDepositDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ReturnASandboxCheckDepositDefaultApplicationJson1StatusEnum;
    title: string;
    type: ReturnASandboxCheckDepositDefaultApplicationJson1TypeEnum;
}
export declare class ReturnASandboxCheckDepositResponse extends SpeakeasyBase {
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
