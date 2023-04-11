import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateAnExternalAccountRequest extends SpeakeasyBase {
    externalAccountId: string;
    updateAnExternalAccountParameters: shared.UpdateAnExternalAccountParameters;
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class UpdateAnExternalAccountDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: UpdateAnExternalAccountDefaultApplicationJson13StatusEnum;
    title: string;
    type: UpdateAnExternalAccountDefaultApplicationJson13TypeEnum;
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class UpdateAnExternalAccountDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnExternalAccountDefaultApplicationJson12StatusEnum;
    title: string;
    type: UpdateAnExternalAccountDefaultApplicationJson12TypeEnum;
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class UpdateAnExternalAccountDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnExternalAccountDefaultApplicationJson11StatusEnum;
    title: string;
    type: UpdateAnExternalAccountDefaultApplicationJson11TypeEnum;
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class UpdateAnExternalAccountDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnExternalAccountDefaultApplicationJson10StatusEnum;
    title: string;
    type: UpdateAnExternalAccountDefaultApplicationJson10TypeEnum;
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class UpdateAnExternalAccountDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: UpdateAnExternalAccountDefaultApplicationJson9StatusEnum;
    title: string;
    type: UpdateAnExternalAccountDefaultApplicationJson9TypeEnum;
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class UpdateAnExternalAccountDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnExternalAccountDefaultApplicationJson8StatusEnum;
    title: string;
    type: UpdateAnExternalAccountDefaultApplicationJson8TypeEnum;
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class UpdateAnExternalAccountDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnExternalAccountDefaultApplicationJson7StatusEnum;
    title: string;
    type: UpdateAnExternalAccountDefaultApplicationJson7TypeEnum;
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class UpdateAnExternalAccountDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnExternalAccountDefaultApplicationJson6StatusEnum;
    title: string;
    type: UpdateAnExternalAccountDefaultApplicationJson6TypeEnum;
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class UpdateAnExternalAccountDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnExternalAccountDefaultApplicationJson5StatusEnum;
    title: string;
    type: UpdateAnExternalAccountDefaultApplicationJson5TypeEnum;
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class UpdateAnExternalAccountDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnExternalAccountDefaultApplicationJson4StatusEnum;
    title: string;
    type: UpdateAnExternalAccountDefaultApplicationJson4TypeEnum;
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class UpdateAnExternalAccountDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnExternalAccountDefaultApplicationJson3StatusEnum;
    title: string;
    type: UpdateAnExternalAccountDefaultApplicationJson3TypeEnum;
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class UpdateAnExternalAccountDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnExternalAccountDefaultApplicationJson2StatusEnum;
    title: string;
    type: UpdateAnExternalAccountDefaultApplicationJson2TypeEnum;
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum UpdateAnExternalAccountDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class UpdateAnExternalAccountDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnExternalAccountDefaultApplicationJson1StatusEnum;
    title: string;
    type: UpdateAnExternalAccountDefaultApplicationJson1TypeEnum;
}
export declare class UpdateAnExternalAccountResponse extends SpeakeasyBase {
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
