import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateAnAccountNumberRequest extends SpeakeasyBase {
    accountNumberId: string;
    updateAnAccountNumberParameters: shared.UpdateAnAccountNumberParameters;
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class UpdateAnAccountNumberDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: UpdateAnAccountNumberDefaultApplicationJson13StatusEnum;
    title: string;
    type: UpdateAnAccountNumberDefaultApplicationJson13TypeEnum;
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class UpdateAnAccountNumberDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnAccountNumberDefaultApplicationJson12StatusEnum;
    title: string;
    type: UpdateAnAccountNumberDefaultApplicationJson12TypeEnum;
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class UpdateAnAccountNumberDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnAccountNumberDefaultApplicationJson11StatusEnum;
    title: string;
    type: UpdateAnAccountNumberDefaultApplicationJson11TypeEnum;
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class UpdateAnAccountNumberDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnAccountNumberDefaultApplicationJson10StatusEnum;
    title: string;
    type: UpdateAnAccountNumberDefaultApplicationJson10TypeEnum;
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class UpdateAnAccountNumberDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: UpdateAnAccountNumberDefaultApplicationJson9StatusEnum;
    title: string;
    type: UpdateAnAccountNumberDefaultApplicationJson9TypeEnum;
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class UpdateAnAccountNumberDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnAccountNumberDefaultApplicationJson8StatusEnum;
    title: string;
    type: UpdateAnAccountNumberDefaultApplicationJson8TypeEnum;
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class UpdateAnAccountNumberDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnAccountNumberDefaultApplicationJson7StatusEnum;
    title: string;
    type: UpdateAnAccountNumberDefaultApplicationJson7TypeEnum;
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class UpdateAnAccountNumberDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnAccountNumberDefaultApplicationJson6StatusEnum;
    title: string;
    type: UpdateAnAccountNumberDefaultApplicationJson6TypeEnum;
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class UpdateAnAccountNumberDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnAccountNumberDefaultApplicationJson5StatusEnum;
    title: string;
    type: UpdateAnAccountNumberDefaultApplicationJson5TypeEnum;
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class UpdateAnAccountNumberDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnAccountNumberDefaultApplicationJson4StatusEnum;
    title: string;
    type: UpdateAnAccountNumberDefaultApplicationJson4TypeEnum;
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class UpdateAnAccountNumberDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnAccountNumberDefaultApplicationJson3StatusEnum;
    title: string;
    type: UpdateAnAccountNumberDefaultApplicationJson3TypeEnum;
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class UpdateAnAccountNumberDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnAccountNumberDefaultApplicationJson2StatusEnum;
    title: string;
    type: UpdateAnAccountNumberDefaultApplicationJson2TypeEnum;
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum UpdateAnAccountNumberDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class UpdateAnAccountNumberDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnAccountNumberDefaultApplicationJson1StatusEnum;
    title: string;
    type: UpdateAnAccountNumberDefaultApplicationJson1TypeEnum;
}
export declare class UpdateAnAccountNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Account Number
     */
    accountNumber?: shared.AccountNumber;
    /**
     * Error
     */
    error?: any;
}
