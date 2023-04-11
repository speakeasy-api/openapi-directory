import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubmitASandboxCheckDepositRequest extends SpeakeasyBase {
    checkDepositId: string;
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class SubmitASandboxCheckDepositDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: SubmitASandboxCheckDepositDefaultApplicationJson13StatusEnum;
    title: string;
    type: SubmitASandboxCheckDepositDefaultApplicationJson13TypeEnum;
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class SubmitASandboxCheckDepositDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxCheckDepositDefaultApplicationJson12StatusEnum;
    title: string;
    type: SubmitASandboxCheckDepositDefaultApplicationJson12TypeEnum;
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class SubmitASandboxCheckDepositDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxCheckDepositDefaultApplicationJson11StatusEnum;
    title: string;
    type: SubmitASandboxCheckDepositDefaultApplicationJson11TypeEnum;
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class SubmitASandboxCheckDepositDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxCheckDepositDefaultApplicationJson10StatusEnum;
    title: string;
    type: SubmitASandboxCheckDepositDefaultApplicationJson10TypeEnum;
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class SubmitASandboxCheckDepositDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: SubmitASandboxCheckDepositDefaultApplicationJson9StatusEnum;
    title: string;
    type: SubmitASandboxCheckDepositDefaultApplicationJson9TypeEnum;
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class SubmitASandboxCheckDepositDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxCheckDepositDefaultApplicationJson8StatusEnum;
    title: string;
    type: SubmitASandboxCheckDepositDefaultApplicationJson8TypeEnum;
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class SubmitASandboxCheckDepositDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxCheckDepositDefaultApplicationJson7StatusEnum;
    title: string;
    type: SubmitASandboxCheckDepositDefaultApplicationJson7TypeEnum;
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class SubmitASandboxCheckDepositDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxCheckDepositDefaultApplicationJson6StatusEnum;
    title: string;
    type: SubmitASandboxCheckDepositDefaultApplicationJson6TypeEnum;
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class SubmitASandboxCheckDepositDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxCheckDepositDefaultApplicationJson5StatusEnum;
    title: string;
    type: SubmitASandboxCheckDepositDefaultApplicationJson5TypeEnum;
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class SubmitASandboxCheckDepositDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxCheckDepositDefaultApplicationJson4StatusEnum;
    title: string;
    type: SubmitASandboxCheckDepositDefaultApplicationJson4TypeEnum;
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class SubmitASandboxCheckDepositDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxCheckDepositDefaultApplicationJson3StatusEnum;
    title: string;
    type: SubmitASandboxCheckDepositDefaultApplicationJson3TypeEnum;
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class SubmitASandboxCheckDepositDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxCheckDepositDefaultApplicationJson2StatusEnum;
    title: string;
    type: SubmitASandboxCheckDepositDefaultApplicationJson2TypeEnum;
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SubmitASandboxCheckDepositDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class SubmitASandboxCheckDepositDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxCheckDepositDefaultApplicationJson1StatusEnum;
    title: string;
    type: SubmitASandboxCheckDepositDefaultApplicationJson1TypeEnum;
}
export declare class SubmitASandboxCheckDepositResponse extends SpeakeasyBase {
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
