import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateAnAccountRequest extends SpeakeasyBase {
    accountId: string;
    updateAnAccountParameters: shared.UpdateAnAccountParameters;
}
export declare enum UpdateAnAccountDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum UpdateAnAccountDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class UpdateAnAccountDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: UpdateAnAccountDefaultApplicationJson13StatusEnum;
    title: string;
    type: UpdateAnAccountDefaultApplicationJson13TypeEnum;
}
export declare enum UpdateAnAccountDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum UpdateAnAccountDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class UpdateAnAccountDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnAccountDefaultApplicationJson12StatusEnum;
    title: string;
    type: UpdateAnAccountDefaultApplicationJson12TypeEnum;
}
export declare enum UpdateAnAccountDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum UpdateAnAccountDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class UpdateAnAccountDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnAccountDefaultApplicationJson11StatusEnum;
    title: string;
    type: UpdateAnAccountDefaultApplicationJson11TypeEnum;
}
export declare enum UpdateAnAccountDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum UpdateAnAccountDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class UpdateAnAccountDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnAccountDefaultApplicationJson10StatusEnum;
    title: string;
    type: UpdateAnAccountDefaultApplicationJson10TypeEnum;
}
export declare enum UpdateAnAccountDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum UpdateAnAccountDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class UpdateAnAccountDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: UpdateAnAccountDefaultApplicationJson9StatusEnum;
    title: string;
    type: UpdateAnAccountDefaultApplicationJson9TypeEnum;
}
export declare enum UpdateAnAccountDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum UpdateAnAccountDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class UpdateAnAccountDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnAccountDefaultApplicationJson8StatusEnum;
    title: string;
    type: UpdateAnAccountDefaultApplicationJson8TypeEnum;
}
export declare enum UpdateAnAccountDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum UpdateAnAccountDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class UpdateAnAccountDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnAccountDefaultApplicationJson7StatusEnum;
    title: string;
    type: UpdateAnAccountDefaultApplicationJson7TypeEnum;
}
export declare enum UpdateAnAccountDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum UpdateAnAccountDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class UpdateAnAccountDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnAccountDefaultApplicationJson6StatusEnum;
    title: string;
    type: UpdateAnAccountDefaultApplicationJson6TypeEnum;
}
export declare enum UpdateAnAccountDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum UpdateAnAccountDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class UpdateAnAccountDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnAccountDefaultApplicationJson5StatusEnum;
    title: string;
    type: UpdateAnAccountDefaultApplicationJson5TypeEnum;
}
export declare enum UpdateAnAccountDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum UpdateAnAccountDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class UpdateAnAccountDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnAccountDefaultApplicationJson4StatusEnum;
    title: string;
    type: UpdateAnAccountDefaultApplicationJson4TypeEnum;
}
export declare enum UpdateAnAccountDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum UpdateAnAccountDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class UpdateAnAccountDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnAccountDefaultApplicationJson3StatusEnum;
    title: string;
    type: UpdateAnAccountDefaultApplicationJson3TypeEnum;
}
export declare enum UpdateAnAccountDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum UpdateAnAccountDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class UpdateAnAccountDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnAccountDefaultApplicationJson2StatusEnum;
    title: string;
    type: UpdateAnAccountDefaultApplicationJson2TypeEnum;
}
export declare enum UpdateAnAccountDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum UpdateAnAccountDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class UpdateAnAccountDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnAccountDefaultApplicationJson1StatusEnum;
    title: string;
    type: UpdateAnAccountDefaultApplicationJson1TypeEnum;
}
export declare class UpdateAnAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Account
     */
    account?: shared.Account;
    /**
     * Error
     */
    error?: any;
}
