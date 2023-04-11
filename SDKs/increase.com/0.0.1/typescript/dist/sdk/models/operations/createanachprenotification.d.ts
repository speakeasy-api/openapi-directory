import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAnAchPrenotificationDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CreateAnAchPrenotificationDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CreateAnAchPrenotificationDefaultApplicationJson13StatusEnum;
    title: string;
    type: CreateAnAchPrenotificationDefaultApplicationJson13TypeEnum;
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CreateAnAchPrenotificationDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchPrenotificationDefaultApplicationJson12StatusEnum;
    title: string;
    type: CreateAnAchPrenotificationDefaultApplicationJson12TypeEnum;
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CreateAnAchPrenotificationDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchPrenotificationDefaultApplicationJson11StatusEnum;
    title: string;
    type: CreateAnAchPrenotificationDefaultApplicationJson11TypeEnum;
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CreateAnAchPrenotificationDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchPrenotificationDefaultApplicationJson10StatusEnum;
    title: string;
    type: CreateAnAchPrenotificationDefaultApplicationJson10TypeEnum;
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CreateAnAchPrenotificationDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CreateAnAchPrenotificationDefaultApplicationJson9StatusEnum;
    title: string;
    type: CreateAnAchPrenotificationDefaultApplicationJson9TypeEnum;
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CreateAnAchPrenotificationDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchPrenotificationDefaultApplicationJson8StatusEnum;
    title: string;
    type: CreateAnAchPrenotificationDefaultApplicationJson8TypeEnum;
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CreateAnAchPrenotificationDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchPrenotificationDefaultApplicationJson7StatusEnum;
    title: string;
    type: CreateAnAchPrenotificationDefaultApplicationJson7TypeEnum;
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CreateAnAchPrenotificationDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchPrenotificationDefaultApplicationJson6StatusEnum;
    title: string;
    type: CreateAnAchPrenotificationDefaultApplicationJson6TypeEnum;
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CreateAnAchPrenotificationDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchPrenotificationDefaultApplicationJson5StatusEnum;
    title: string;
    type: CreateAnAchPrenotificationDefaultApplicationJson5TypeEnum;
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CreateAnAchPrenotificationDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchPrenotificationDefaultApplicationJson4StatusEnum;
    title: string;
    type: CreateAnAchPrenotificationDefaultApplicationJson4TypeEnum;
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CreateAnAchPrenotificationDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchPrenotificationDefaultApplicationJson3StatusEnum;
    title: string;
    type: CreateAnAchPrenotificationDefaultApplicationJson3TypeEnum;
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CreateAnAchPrenotificationDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchPrenotificationDefaultApplicationJson2StatusEnum;
    title: string;
    type: CreateAnAchPrenotificationDefaultApplicationJson2TypeEnum;
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAnAchPrenotificationDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CreateAnAchPrenotificationDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchPrenotificationDefaultApplicationJson1StatusEnum;
    title: string;
    type: CreateAnAchPrenotificationDefaultApplicationJson1TypeEnum;
}
export declare class CreateAnAchPrenotificationResponse extends SpeakeasyBase {
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
