import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveSensitiveDetailsForACardRequest extends SpeakeasyBase {
    cardId: string;
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveSensitiveDetailsForACardDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveSensitiveDetailsForACardDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveSensitiveDetailsForACardDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveSensitiveDetailsForACardDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveSensitiveDetailsForACardDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveSensitiveDetailsForACardDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveSensitiveDetailsForACardDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveSensitiveDetailsForACardDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveSensitiveDetailsForACardDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveSensitiveDetailsForACardDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveSensitiveDetailsForACardDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveSensitiveDetailsForACardDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveSensitiveDetailsForACardDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveSensitiveDetailsForACardDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveSensitiveDetailsForACardDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveSensitiveDetailsForACardDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveSensitiveDetailsForACardDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveSensitiveDetailsForACardDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveSensitiveDetailsForACardDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveSensitiveDetailsForACardDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveSensitiveDetailsForACardDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveSensitiveDetailsForACardDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveSensitiveDetailsForACardDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveSensitiveDetailsForACardDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveSensitiveDetailsForACardDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveSensitiveDetailsForACardDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveSensitiveDetailsForACardDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveSensitiveDetailsForACardDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveSensitiveDetailsForACardDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveSensitiveDetailsForACardDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveSensitiveDetailsForACardDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveSensitiveDetailsForACardDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveSensitiveDetailsForACardDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveSensitiveDetailsForACardDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveSensitiveDetailsForACardDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveSensitiveDetailsForACardDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveSensitiveDetailsForACardDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveSensitiveDetailsForACardDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveSensitiveDetailsForACardDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveSensitiveDetailsForACardDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveSensitiveDetailsForACardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Card Details
     */
    cardDetails?: shared.CardDetails;
    /**
     * Error
     */
    error?: any;
}
