import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListDigitalWalletTokensRequest extends SpeakeasyBase {
    cardId?: string;
    createdAtAfter?: Date;
    createdAtBefore?: Date;
    createdAtOnOrAfter?: Date;
    createdAtOnOrBefore?: Date;
    cursor?: string;
    limit?: number;
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListDigitalWalletTokensDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListDigitalWalletTokensDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListDigitalWalletTokensDefaultApplicationJson13TypeEnum;
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListDigitalWalletTokensDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListDigitalWalletTokensDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListDigitalWalletTokensDefaultApplicationJson12TypeEnum;
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListDigitalWalletTokensDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListDigitalWalletTokensDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListDigitalWalletTokensDefaultApplicationJson11TypeEnum;
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListDigitalWalletTokensDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListDigitalWalletTokensDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListDigitalWalletTokensDefaultApplicationJson10TypeEnum;
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListDigitalWalletTokensDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListDigitalWalletTokensDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListDigitalWalletTokensDefaultApplicationJson9TypeEnum;
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListDigitalWalletTokensDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListDigitalWalletTokensDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListDigitalWalletTokensDefaultApplicationJson8TypeEnum;
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListDigitalWalletTokensDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListDigitalWalletTokensDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListDigitalWalletTokensDefaultApplicationJson7TypeEnum;
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListDigitalWalletTokensDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListDigitalWalletTokensDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListDigitalWalletTokensDefaultApplicationJson6TypeEnum;
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListDigitalWalletTokensDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListDigitalWalletTokensDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListDigitalWalletTokensDefaultApplicationJson5TypeEnum;
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListDigitalWalletTokensDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListDigitalWalletTokensDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListDigitalWalletTokensDefaultApplicationJson4TypeEnum;
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListDigitalWalletTokensDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListDigitalWalletTokensDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListDigitalWalletTokensDefaultApplicationJson3TypeEnum;
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListDigitalWalletTokensDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListDigitalWalletTokensDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListDigitalWalletTokensDefaultApplicationJson2TypeEnum;
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListDigitalWalletTokensDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListDigitalWalletTokensDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListDigitalWalletTokensDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListDigitalWalletTokensDefaultApplicationJson1TypeEnum;
}
export declare class ListDigitalWalletTokensResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Digital Wallet Token List
     */
    digitalWalletTokenList?: shared.DigitalWalletTokenList;
    /**
     * Error
     */
    error?: any;
}
