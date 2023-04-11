import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListEventSubscriptionsRequest extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
}
export declare enum ListEventSubscriptionsDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListEventSubscriptionsDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListEventSubscriptionsDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListEventSubscriptionsDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListEventSubscriptionsDefaultApplicationJson13TypeEnum;
}
export declare enum ListEventSubscriptionsDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListEventSubscriptionsDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListEventSubscriptionsDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListEventSubscriptionsDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListEventSubscriptionsDefaultApplicationJson12TypeEnum;
}
export declare enum ListEventSubscriptionsDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListEventSubscriptionsDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListEventSubscriptionsDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListEventSubscriptionsDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListEventSubscriptionsDefaultApplicationJson11TypeEnum;
}
export declare enum ListEventSubscriptionsDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListEventSubscriptionsDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListEventSubscriptionsDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListEventSubscriptionsDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListEventSubscriptionsDefaultApplicationJson10TypeEnum;
}
export declare enum ListEventSubscriptionsDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListEventSubscriptionsDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListEventSubscriptionsDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListEventSubscriptionsDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListEventSubscriptionsDefaultApplicationJson9TypeEnum;
}
export declare enum ListEventSubscriptionsDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListEventSubscriptionsDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListEventSubscriptionsDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListEventSubscriptionsDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListEventSubscriptionsDefaultApplicationJson8TypeEnum;
}
export declare enum ListEventSubscriptionsDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListEventSubscriptionsDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListEventSubscriptionsDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListEventSubscriptionsDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListEventSubscriptionsDefaultApplicationJson7TypeEnum;
}
export declare enum ListEventSubscriptionsDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListEventSubscriptionsDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListEventSubscriptionsDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListEventSubscriptionsDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListEventSubscriptionsDefaultApplicationJson6TypeEnum;
}
export declare enum ListEventSubscriptionsDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListEventSubscriptionsDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListEventSubscriptionsDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListEventSubscriptionsDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListEventSubscriptionsDefaultApplicationJson5TypeEnum;
}
export declare enum ListEventSubscriptionsDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListEventSubscriptionsDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListEventSubscriptionsDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListEventSubscriptionsDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListEventSubscriptionsDefaultApplicationJson4TypeEnum;
}
export declare enum ListEventSubscriptionsDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListEventSubscriptionsDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListEventSubscriptionsDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListEventSubscriptionsDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListEventSubscriptionsDefaultApplicationJson3TypeEnum;
}
export declare enum ListEventSubscriptionsDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListEventSubscriptionsDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListEventSubscriptionsDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListEventSubscriptionsDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListEventSubscriptionsDefaultApplicationJson2TypeEnum;
}
export declare enum ListEventSubscriptionsDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListEventSubscriptionsDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListEventSubscriptionsDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListEventSubscriptionsDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListEventSubscriptionsDefaultApplicationJson1TypeEnum;
}
export declare class ListEventSubscriptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Event Subscription List
     */
    eventSubscriptionList?: shared.EventSubscriptionList;
}
