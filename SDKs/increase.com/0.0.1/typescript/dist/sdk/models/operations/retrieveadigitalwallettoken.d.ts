import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveADigitalWalletTokenRequest extends SpeakeasyBase {
    digitalWalletTokenId: string;
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveADigitalWalletTokenDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveADigitalWalletTokenDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveADigitalWalletTokenDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveADigitalWalletTokenDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADigitalWalletTokenDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveADigitalWalletTokenDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveADigitalWalletTokenDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADigitalWalletTokenDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveADigitalWalletTokenDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveADigitalWalletTokenDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADigitalWalletTokenDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveADigitalWalletTokenDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveADigitalWalletTokenDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveADigitalWalletTokenDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveADigitalWalletTokenDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveADigitalWalletTokenDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADigitalWalletTokenDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveADigitalWalletTokenDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveADigitalWalletTokenDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADigitalWalletTokenDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveADigitalWalletTokenDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveADigitalWalletTokenDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADigitalWalletTokenDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveADigitalWalletTokenDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveADigitalWalletTokenDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADigitalWalletTokenDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveADigitalWalletTokenDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveADigitalWalletTokenDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADigitalWalletTokenDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveADigitalWalletTokenDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveADigitalWalletTokenDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADigitalWalletTokenDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveADigitalWalletTokenDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveADigitalWalletTokenDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADigitalWalletTokenDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveADigitalWalletTokenDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveADigitalWalletTokenDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveADigitalWalletTokenDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADigitalWalletTokenDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveADigitalWalletTokenDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveADigitalWalletTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Digital Wallet Token
     */
    digitalWalletToken?: shared.DigitalWalletToken;
    /**
     * Error
     */
    error?: any;
}
