import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAnEventRequest extends SpeakeasyBase {
    eventId: string;
}
export declare enum RetrieveAnEventDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveAnEventDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveAnEventDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveAnEventDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveAnEventDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveAnEventDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnEventDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveAnEventDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEventDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveAnEventDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveAnEventDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnEventDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveAnEventDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEventDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveAnEventDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveAnEventDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnEventDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveAnEventDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEventDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveAnEventDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveAnEventDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnEventDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveAnEventDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveAnEventDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveAnEventDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveAnEventDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnEventDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveAnEventDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEventDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveAnEventDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveAnEventDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveAnEventDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveAnEventDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEventDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveAnEventDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveAnEventDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveAnEventDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveAnEventDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEventDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveAnEventDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveAnEventDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnEventDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveAnEventDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEventDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveAnEventDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveAnEventDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveAnEventDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveAnEventDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEventDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveAnEventDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveAnEventDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnEventDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveAnEventDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEventDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveAnEventDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveAnEventDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnEventDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveAnEventDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEventDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveAnEventDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveAnEventDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnEventDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveAnEventDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEventDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveAnEventDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveAnEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Event
     */
    event?: shared.Event;
}
