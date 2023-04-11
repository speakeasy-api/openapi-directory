import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloseAnAccountRequest extends SpeakeasyBase {
    accountId: string;
}
export declare enum CloseAnAccountDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CloseAnAccountDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CloseAnAccountDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CloseAnAccountDefaultApplicationJson13StatusEnum;
    title: string;
    type: CloseAnAccountDefaultApplicationJson13TypeEnum;
}
export declare enum CloseAnAccountDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CloseAnAccountDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CloseAnAccountDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CloseAnAccountDefaultApplicationJson12StatusEnum;
    title: string;
    type: CloseAnAccountDefaultApplicationJson12TypeEnum;
}
export declare enum CloseAnAccountDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CloseAnAccountDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CloseAnAccountDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CloseAnAccountDefaultApplicationJson11StatusEnum;
    title: string;
    type: CloseAnAccountDefaultApplicationJson11TypeEnum;
}
export declare enum CloseAnAccountDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CloseAnAccountDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CloseAnAccountDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CloseAnAccountDefaultApplicationJson10StatusEnum;
    title: string;
    type: CloseAnAccountDefaultApplicationJson10TypeEnum;
}
export declare enum CloseAnAccountDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CloseAnAccountDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CloseAnAccountDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CloseAnAccountDefaultApplicationJson9StatusEnum;
    title: string;
    type: CloseAnAccountDefaultApplicationJson9TypeEnum;
}
export declare enum CloseAnAccountDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CloseAnAccountDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CloseAnAccountDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CloseAnAccountDefaultApplicationJson8StatusEnum;
    title: string;
    type: CloseAnAccountDefaultApplicationJson8TypeEnum;
}
export declare enum CloseAnAccountDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CloseAnAccountDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CloseAnAccountDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CloseAnAccountDefaultApplicationJson7StatusEnum;
    title: string;
    type: CloseAnAccountDefaultApplicationJson7TypeEnum;
}
export declare enum CloseAnAccountDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CloseAnAccountDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CloseAnAccountDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CloseAnAccountDefaultApplicationJson6StatusEnum;
    title: string;
    type: CloseAnAccountDefaultApplicationJson6TypeEnum;
}
export declare enum CloseAnAccountDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CloseAnAccountDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CloseAnAccountDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CloseAnAccountDefaultApplicationJson5StatusEnum;
    title: string;
    type: CloseAnAccountDefaultApplicationJson5TypeEnum;
}
export declare enum CloseAnAccountDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CloseAnAccountDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CloseAnAccountDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CloseAnAccountDefaultApplicationJson4StatusEnum;
    title: string;
    type: CloseAnAccountDefaultApplicationJson4TypeEnum;
}
export declare enum CloseAnAccountDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CloseAnAccountDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CloseAnAccountDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CloseAnAccountDefaultApplicationJson3StatusEnum;
    title: string;
    type: CloseAnAccountDefaultApplicationJson3TypeEnum;
}
export declare enum CloseAnAccountDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CloseAnAccountDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CloseAnAccountDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CloseAnAccountDefaultApplicationJson2StatusEnum;
    title: string;
    type: CloseAnAccountDefaultApplicationJson2TypeEnum;
}
export declare enum CloseAnAccountDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CloseAnAccountDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CloseAnAccountDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CloseAnAccountDefaultApplicationJson1StatusEnum;
    title: string;
    type: CloseAnAccountDefaultApplicationJson1TypeEnum;
}
export declare class CloseAnAccountResponse extends SpeakeasyBase {
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
