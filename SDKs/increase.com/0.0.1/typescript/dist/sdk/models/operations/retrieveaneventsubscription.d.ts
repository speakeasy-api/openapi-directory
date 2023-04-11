import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAnEventSubscriptionRequest extends SpeakeasyBase {
    eventSubscriptionId: string;
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveAnEventSubscriptionDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveAnEventSubscriptionDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveAnEventSubscriptionDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveAnEventSubscriptionDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEventSubscriptionDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveAnEventSubscriptionDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveAnEventSubscriptionDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEventSubscriptionDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveAnEventSubscriptionDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveAnEventSubscriptionDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEventSubscriptionDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveAnEventSubscriptionDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveAnEventSubscriptionDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveAnEventSubscriptionDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveAnEventSubscriptionDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveAnEventSubscriptionDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEventSubscriptionDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveAnEventSubscriptionDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveAnEventSubscriptionDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEventSubscriptionDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveAnEventSubscriptionDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveAnEventSubscriptionDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEventSubscriptionDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveAnEventSubscriptionDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveAnEventSubscriptionDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEventSubscriptionDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveAnEventSubscriptionDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveAnEventSubscriptionDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEventSubscriptionDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveAnEventSubscriptionDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveAnEventSubscriptionDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEventSubscriptionDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveAnEventSubscriptionDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveAnEventSubscriptionDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEventSubscriptionDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveAnEventSubscriptionDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnEventSubscriptionDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveAnEventSubscriptionDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEventSubscriptionDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveAnEventSubscriptionDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveAnEventSubscriptionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Event Subscription
     */
    eventSubscription?: shared.EventSubscription;
}
