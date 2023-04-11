import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAnExternalAccountDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CreateAnExternalAccountDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CreateAnExternalAccountDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CreateAnExternalAccountDefaultApplicationJson13StatusEnum;
    title: string;
    type: CreateAnExternalAccountDefaultApplicationJson13TypeEnum;
}
export declare enum CreateAnExternalAccountDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnExternalAccountDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CreateAnExternalAccountDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CreateAnExternalAccountDefaultApplicationJson12StatusEnum;
    title: string;
    type: CreateAnExternalAccountDefaultApplicationJson12TypeEnum;
}
export declare enum CreateAnExternalAccountDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAnExternalAccountDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CreateAnExternalAccountDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CreateAnExternalAccountDefaultApplicationJson11StatusEnum;
    title: string;
    type: CreateAnExternalAccountDefaultApplicationJson11TypeEnum;
}
export declare enum CreateAnExternalAccountDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAnExternalAccountDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CreateAnExternalAccountDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CreateAnExternalAccountDefaultApplicationJson10StatusEnum;
    title: string;
    type: CreateAnExternalAccountDefaultApplicationJson10TypeEnum;
}
export declare enum CreateAnExternalAccountDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAnExternalAccountDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CreateAnExternalAccountDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CreateAnExternalAccountDefaultApplicationJson9StatusEnum;
    title: string;
    type: CreateAnExternalAccountDefaultApplicationJson9TypeEnum;
}
export declare enum CreateAnExternalAccountDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAnExternalAccountDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CreateAnExternalAccountDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CreateAnExternalAccountDefaultApplicationJson8StatusEnum;
    title: string;
    type: CreateAnExternalAccountDefaultApplicationJson8TypeEnum;
}
export declare enum CreateAnExternalAccountDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CreateAnExternalAccountDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CreateAnExternalAccountDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CreateAnExternalAccountDefaultApplicationJson7StatusEnum;
    title: string;
    type: CreateAnExternalAccountDefaultApplicationJson7TypeEnum;
}
export declare enum CreateAnExternalAccountDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CreateAnExternalAccountDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CreateAnExternalAccountDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CreateAnExternalAccountDefaultApplicationJson6StatusEnum;
    title: string;
    type: CreateAnExternalAccountDefaultApplicationJson6TypeEnum;
}
export declare enum CreateAnExternalAccountDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnExternalAccountDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CreateAnExternalAccountDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CreateAnExternalAccountDefaultApplicationJson5StatusEnum;
    title: string;
    type: CreateAnExternalAccountDefaultApplicationJson5TypeEnum;
}
export declare enum CreateAnExternalAccountDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CreateAnExternalAccountDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CreateAnExternalAccountDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CreateAnExternalAccountDefaultApplicationJson4StatusEnum;
    title: string;
    type: CreateAnExternalAccountDefaultApplicationJson4TypeEnum;
}
export declare enum CreateAnExternalAccountDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAnExternalAccountDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CreateAnExternalAccountDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CreateAnExternalAccountDefaultApplicationJson3StatusEnum;
    title: string;
    type: CreateAnExternalAccountDefaultApplicationJson3TypeEnum;
}
export declare enum CreateAnExternalAccountDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnExternalAccountDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CreateAnExternalAccountDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CreateAnExternalAccountDefaultApplicationJson2StatusEnum;
    title: string;
    type: CreateAnExternalAccountDefaultApplicationJson2TypeEnum;
}
export declare enum CreateAnExternalAccountDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAnExternalAccountDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CreateAnExternalAccountDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CreateAnExternalAccountDefaultApplicationJson1StatusEnum;
    title: string;
    type: CreateAnExternalAccountDefaultApplicationJson1TypeEnum;
}
export declare class CreateAnExternalAccountResponse extends SpeakeasyBase {
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
