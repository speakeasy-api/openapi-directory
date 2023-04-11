import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAnEventSubscriptionDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CreateAnEventSubscriptionDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CreateAnEventSubscriptionDefaultApplicationJson13StatusEnum;
    title: string;
    type: CreateAnEventSubscriptionDefaultApplicationJson13TypeEnum;
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CreateAnEventSubscriptionDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CreateAnEventSubscriptionDefaultApplicationJson12StatusEnum;
    title: string;
    type: CreateAnEventSubscriptionDefaultApplicationJson12TypeEnum;
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CreateAnEventSubscriptionDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CreateAnEventSubscriptionDefaultApplicationJson11StatusEnum;
    title: string;
    type: CreateAnEventSubscriptionDefaultApplicationJson11TypeEnum;
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CreateAnEventSubscriptionDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CreateAnEventSubscriptionDefaultApplicationJson10StatusEnum;
    title: string;
    type: CreateAnEventSubscriptionDefaultApplicationJson10TypeEnum;
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CreateAnEventSubscriptionDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CreateAnEventSubscriptionDefaultApplicationJson9StatusEnum;
    title: string;
    type: CreateAnEventSubscriptionDefaultApplicationJson9TypeEnum;
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CreateAnEventSubscriptionDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CreateAnEventSubscriptionDefaultApplicationJson8StatusEnum;
    title: string;
    type: CreateAnEventSubscriptionDefaultApplicationJson8TypeEnum;
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CreateAnEventSubscriptionDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CreateAnEventSubscriptionDefaultApplicationJson7StatusEnum;
    title: string;
    type: CreateAnEventSubscriptionDefaultApplicationJson7TypeEnum;
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CreateAnEventSubscriptionDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CreateAnEventSubscriptionDefaultApplicationJson6StatusEnum;
    title: string;
    type: CreateAnEventSubscriptionDefaultApplicationJson6TypeEnum;
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CreateAnEventSubscriptionDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CreateAnEventSubscriptionDefaultApplicationJson5StatusEnum;
    title: string;
    type: CreateAnEventSubscriptionDefaultApplicationJson5TypeEnum;
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CreateAnEventSubscriptionDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CreateAnEventSubscriptionDefaultApplicationJson4StatusEnum;
    title: string;
    type: CreateAnEventSubscriptionDefaultApplicationJson4TypeEnum;
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CreateAnEventSubscriptionDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CreateAnEventSubscriptionDefaultApplicationJson3StatusEnum;
    title: string;
    type: CreateAnEventSubscriptionDefaultApplicationJson3TypeEnum;
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CreateAnEventSubscriptionDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CreateAnEventSubscriptionDefaultApplicationJson2StatusEnum;
    title: string;
    type: CreateAnEventSubscriptionDefaultApplicationJson2TypeEnum;
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAnEventSubscriptionDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CreateAnEventSubscriptionDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CreateAnEventSubscriptionDefaultApplicationJson1StatusEnum;
    title: string;
    type: CreateAnEventSubscriptionDefaultApplicationJson1TypeEnum;
}
export declare class CreateAnEventSubscriptionResponse extends SpeakeasyBase {
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
