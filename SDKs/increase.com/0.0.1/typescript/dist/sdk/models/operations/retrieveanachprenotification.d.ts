import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAnAchPrenotificationRequest extends SpeakeasyBase {
    achPrenotificationId: string;
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveAnAchPrenotificationDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveAnAchPrenotificationDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveAnAchPrenotificationDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveAnAchPrenotificationDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAchPrenotificationDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveAnAchPrenotificationDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveAnAchPrenotificationDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAchPrenotificationDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveAnAchPrenotificationDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveAnAchPrenotificationDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAchPrenotificationDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveAnAchPrenotificationDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveAnAchPrenotificationDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveAnAchPrenotificationDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveAnAchPrenotificationDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveAnAchPrenotificationDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAchPrenotificationDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveAnAchPrenotificationDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveAnAchPrenotificationDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAchPrenotificationDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveAnAchPrenotificationDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveAnAchPrenotificationDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAchPrenotificationDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveAnAchPrenotificationDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveAnAchPrenotificationDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAchPrenotificationDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveAnAchPrenotificationDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveAnAchPrenotificationDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAchPrenotificationDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveAnAchPrenotificationDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveAnAchPrenotificationDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAchPrenotificationDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveAnAchPrenotificationDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveAnAchPrenotificationDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAchPrenotificationDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveAnAchPrenotificationDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnAchPrenotificationDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveAnAchPrenotificationDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAchPrenotificationDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveAnAchPrenotificationDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveAnAchPrenotificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ACH Prenotification
     */
    achPrenotification?: shared.AchPrenotification;
    /**
     * Error
     */
    error?: any;
}
