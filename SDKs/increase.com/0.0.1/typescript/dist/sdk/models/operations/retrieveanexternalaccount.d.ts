import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAnExternalAccountRequest extends SpeakeasyBase {
    externalAccountId: string;
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveAnExternalAccountDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveAnExternalAccountDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveAnExternalAccountDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveAnExternalAccountDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnExternalAccountDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveAnExternalAccountDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveAnExternalAccountDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnExternalAccountDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveAnExternalAccountDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveAnExternalAccountDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnExternalAccountDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveAnExternalAccountDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveAnExternalAccountDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveAnExternalAccountDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveAnExternalAccountDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveAnExternalAccountDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnExternalAccountDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveAnExternalAccountDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveAnExternalAccountDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnExternalAccountDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveAnExternalAccountDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveAnExternalAccountDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnExternalAccountDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveAnExternalAccountDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveAnExternalAccountDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnExternalAccountDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveAnExternalAccountDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveAnExternalAccountDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnExternalAccountDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveAnExternalAccountDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveAnExternalAccountDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnExternalAccountDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveAnExternalAccountDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveAnExternalAccountDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnExternalAccountDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveAnExternalAccountDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnExternalAccountDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveAnExternalAccountDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnExternalAccountDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveAnExternalAccountDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveAnExternalAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * External Account
     */
    externalAccount?: shared.ExternalAccount;
}
