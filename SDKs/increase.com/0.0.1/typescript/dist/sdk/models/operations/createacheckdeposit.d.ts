import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateACheckDepositDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CreateACheckDepositDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CreateACheckDepositDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CreateACheckDepositDefaultApplicationJson13StatusEnum;
    title: string;
    type: CreateACheckDepositDefaultApplicationJson13TypeEnum;
}
export declare enum CreateACheckDepositDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateACheckDepositDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CreateACheckDepositDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CreateACheckDepositDefaultApplicationJson12StatusEnum;
    title: string;
    type: CreateACheckDepositDefaultApplicationJson12TypeEnum;
}
export declare enum CreateACheckDepositDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateACheckDepositDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CreateACheckDepositDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CreateACheckDepositDefaultApplicationJson11StatusEnum;
    title: string;
    type: CreateACheckDepositDefaultApplicationJson11TypeEnum;
}
export declare enum CreateACheckDepositDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CreateACheckDepositDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CreateACheckDepositDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CreateACheckDepositDefaultApplicationJson10StatusEnum;
    title: string;
    type: CreateACheckDepositDefaultApplicationJson10TypeEnum;
}
export declare enum CreateACheckDepositDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CreateACheckDepositDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CreateACheckDepositDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CreateACheckDepositDefaultApplicationJson9StatusEnum;
    title: string;
    type: CreateACheckDepositDefaultApplicationJson9TypeEnum;
}
export declare enum CreateACheckDepositDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateACheckDepositDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CreateACheckDepositDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CreateACheckDepositDefaultApplicationJson8StatusEnum;
    title: string;
    type: CreateACheckDepositDefaultApplicationJson8TypeEnum;
}
export declare enum CreateACheckDepositDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CreateACheckDepositDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CreateACheckDepositDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CreateACheckDepositDefaultApplicationJson7StatusEnum;
    title: string;
    type: CreateACheckDepositDefaultApplicationJson7TypeEnum;
}
export declare enum CreateACheckDepositDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CreateACheckDepositDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CreateACheckDepositDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CreateACheckDepositDefaultApplicationJson6StatusEnum;
    title: string;
    type: CreateACheckDepositDefaultApplicationJson6TypeEnum;
}
export declare enum CreateACheckDepositDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateACheckDepositDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CreateACheckDepositDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CreateACheckDepositDefaultApplicationJson5StatusEnum;
    title: string;
    type: CreateACheckDepositDefaultApplicationJson5TypeEnum;
}
export declare enum CreateACheckDepositDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CreateACheckDepositDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CreateACheckDepositDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CreateACheckDepositDefaultApplicationJson4StatusEnum;
    title: string;
    type: CreateACheckDepositDefaultApplicationJson4TypeEnum;
}
export declare enum CreateACheckDepositDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateACheckDepositDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CreateACheckDepositDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CreateACheckDepositDefaultApplicationJson3StatusEnum;
    title: string;
    type: CreateACheckDepositDefaultApplicationJson3TypeEnum;
}
export declare enum CreateACheckDepositDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateACheckDepositDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CreateACheckDepositDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CreateACheckDepositDefaultApplicationJson2StatusEnum;
    title: string;
    type: CreateACheckDepositDefaultApplicationJson2TypeEnum;
}
export declare enum CreateACheckDepositDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateACheckDepositDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CreateACheckDepositDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CreateACheckDepositDefaultApplicationJson1StatusEnum;
    title: string;
    type: CreateACheckDepositDefaultApplicationJson1TypeEnum;
}
export declare class CreateACheckDepositResponse extends SpeakeasyBase {
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
