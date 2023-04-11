import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateAnEventSubscriptionRequest extends SpeakeasyBase {
    eventSubscriptionId: string;
    updateAnEventSubscriptionParameters: shared.UpdateAnEventSubscriptionParameters;
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class UpdateAnEventSubscriptionDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: UpdateAnEventSubscriptionDefaultApplicationJson13StatusEnum;
    title: string;
    type: UpdateAnEventSubscriptionDefaultApplicationJson13TypeEnum;
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class UpdateAnEventSubscriptionDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnEventSubscriptionDefaultApplicationJson12StatusEnum;
    title: string;
    type: UpdateAnEventSubscriptionDefaultApplicationJson12TypeEnum;
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class UpdateAnEventSubscriptionDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnEventSubscriptionDefaultApplicationJson11StatusEnum;
    title: string;
    type: UpdateAnEventSubscriptionDefaultApplicationJson11TypeEnum;
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class UpdateAnEventSubscriptionDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnEventSubscriptionDefaultApplicationJson10StatusEnum;
    title: string;
    type: UpdateAnEventSubscriptionDefaultApplicationJson10TypeEnum;
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class UpdateAnEventSubscriptionDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: UpdateAnEventSubscriptionDefaultApplicationJson9StatusEnum;
    title: string;
    type: UpdateAnEventSubscriptionDefaultApplicationJson9TypeEnum;
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class UpdateAnEventSubscriptionDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnEventSubscriptionDefaultApplicationJson8StatusEnum;
    title: string;
    type: UpdateAnEventSubscriptionDefaultApplicationJson8TypeEnum;
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class UpdateAnEventSubscriptionDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnEventSubscriptionDefaultApplicationJson7StatusEnum;
    title: string;
    type: UpdateAnEventSubscriptionDefaultApplicationJson7TypeEnum;
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class UpdateAnEventSubscriptionDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnEventSubscriptionDefaultApplicationJson6StatusEnum;
    title: string;
    type: UpdateAnEventSubscriptionDefaultApplicationJson6TypeEnum;
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class UpdateAnEventSubscriptionDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnEventSubscriptionDefaultApplicationJson5StatusEnum;
    title: string;
    type: UpdateAnEventSubscriptionDefaultApplicationJson5TypeEnum;
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class UpdateAnEventSubscriptionDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnEventSubscriptionDefaultApplicationJson4StatusEnum;
    title: string;
    type: UpdateAnEventSubscriptionDefaultApplicationJson4TypeEnum;
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class UpdateAnEventSubscriptionDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnEventSubscriptionDefaultApplicationJson3StatusEnum;
    title: string;
    type: UpdateAnEventSubscriptionDefaultApplicationJson3TypeEnum;
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class UpdateAnEventSubscriptionDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnEventSubscriptionDefaultApplicationJson2StatusEnum;
    title: string;
    type: UpdateAnEventSubscriptionDefaultApplicationJson2TypeEnum;
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum UpdateAnEventSubscriptionDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class UpdateAnEventSubscriptionDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: UpdateAnEventSubscriptionDefaultApplicationJson1StatusEnum;
    title: string;
    type: UpdateAnEventSubscriptionDefaultApplicationJson1TypeEnum;
}
export declare class UpdateAnEventSubscriptionResponse extends SpeakeasyBase {
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
