import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveACheckDepositRequest extends SpeakeasyBase {
    checkDepositId: string;
}
export declare enum RetrieveACheckDepositDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveACheckDepositDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveACheckDepositDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveACheckDepositDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveACheckDepositDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveACheckDepositDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveACheckDepositDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveACheckDepositDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACheckDepositDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveACheckDepositDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveACheckDepositDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveACheckDepositDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveACheckDepositDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACheckDepositDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveACheckDepositDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveACheckDepositDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveACheckDepositDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveACheckDepositDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACheckDepositDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveACheckDepositDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveACheckDepositDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveACheckDepositDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveACheckDepositDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveACheckDepositDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveACheckDepositDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveACheckDepositDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveACheckDepositDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveACheckDepositDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACheckDepositDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveACheckDepositDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveACheckDepositDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveACheckDepositDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveACheckDepositDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACheckDepositDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveACheckDepositDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveACheckDepositDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveACheckDepositDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveACheckDepositDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACheckDepositDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveACheckDepositDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveACheckDepositDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveACheckDepositDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveACheckDepositDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACheckDepositDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveACheckDepositDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveACheckDepositDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveACheckDepositDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveACheckDepositDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACheckDepositDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveACheckDepositDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveACheckDepositDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveACheckDepositDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveACheckDepositDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACheckDepositDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveACheckDepositDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveACheckDepositDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveACheckDepositDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveACheckDepositDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACheckDepositDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveACheckDepositDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveACheckDepositDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveACheckDepositDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveACheckDepositDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACheckDepositDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveACheckDepositDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveACheckDepositResponse extends SpeakeasyBase {
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
