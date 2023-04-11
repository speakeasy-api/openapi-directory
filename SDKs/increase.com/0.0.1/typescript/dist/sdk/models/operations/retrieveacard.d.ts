import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveACardRequest extends SpeakeasyBase {
    cardId: string;
}
export declare enum RetrieveACardDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveACardDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveACardDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveACardDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveACardDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveACardDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveACardDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveACardDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveACardDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveACardDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveACardDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveACardDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveACardDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveACardDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveACardDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveACardDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveACardDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveACardDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveACardDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveACardDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveACardDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveACardDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveACardDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveACardDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveACardDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveACardDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveACardDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveACardDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveACardDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveACardDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveACardDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveACardDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveACardDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveACardDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveACardDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveACardDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveACardDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveACardDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveACardDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveACardDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveACardDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveACardDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveACardDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveACardDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveACardDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveACardDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveACardDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveACardDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveACardDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveACardDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveACardDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveACardDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveACardDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveACardDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveACardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Card
     */
    card?: shared.Card;
    /**
     * Error
     */
    error?: any;
}
