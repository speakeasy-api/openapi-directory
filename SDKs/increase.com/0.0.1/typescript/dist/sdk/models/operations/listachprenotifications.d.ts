import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListAchPrenotificationsRequest extends SpeakeasyBase {
    createdAtAfter?: Date;
    createdAtBefore?: Date;
    createdAtOnOrAfter?: Date;
    createdAtOnOrBefore?: Date;
    cursor?: string;
    limit?: number;
}
export declare enum ListAchPrenotificationsDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListAchPrenotificationsDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListAchPrenotificationsDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListAchPrenotificationsDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListAchPrenotificationsDefaultApplicationJson13TypeEnum;
}
export declare enum ListAchPrenotificationsDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListAchPrenotificationsDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListAchPrenotificationsDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListAchPrenotificationsDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListAchPrenotificationsDefaultApplicationJson12TypeEnum;
}
export declare enum ListAchPrenotificationsDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListAchPrenotificationsDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListAchPrenotificationsDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListAchPrenotificationsDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListAchPrenotificationsDefaultApplicationJson11TypeEnum;
}
export declare enum ListAchPrenotificationsDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListAchPrenotificationsDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListAchPrenotificationsDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListAchPrenotificationsDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListAchPrenotificationsDefaultApplicationJson10TypeEnum;
}
export declare enum ListAchPrenotificationsDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListAchPrenotificationsDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListAchPrenotificationsDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListAchPrenotificationsDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListAchPrenotificationsDefaultApplicationJson9TypeEnum;
}
export declare enum ListAchPrenotificationsDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListAchPrenotificationsDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListAchPrenotificationsDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListAchPrenotificationsDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListAchPrenotificationsDefaultApplicationJson8TypeEnum;
}
export declare enum ListAchPrenotificationsDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListAchPrenotificationsDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListAchPrenotificationsDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListAchPrenotificationsDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListAchPrenotificationsDefaultApplicationJson7TypeEnum;
}
export declare enum ListAchPrenotificationsDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListAchPrenotificationsDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListAchPrenotificationsDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListAchPrenotificationsDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListAchPrenotificationsDefaultApplicationJson6TypeEnum;
}
export declare enum ListAchPrenotificationsDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListAchPrenotificationsDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListAchPrenotificationsDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListAchPrenotificationsDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListAchPrenotificationsDefaultApplicationJson5TypeEnum;
}
export declare enum ListAchPrenotificationsDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListAchPrenotificationsDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListAchPrenotificationsDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListAchPrenotificationsDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListAchPrenotificationsDefaultApplicationJson4TypeEnum;
}
export declare enum ListAchPrenotificationsDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListAchPrenotificationsDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListAchPrenotificationsDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListAchPrenotificationsDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListAchPrenotificationsDefaultApplicationJson3TypeEnum;
}
export declare enum ListAchPrenotificationsDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListAchPrenotificationsDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListAchPrenotificationsDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListAchPrenotificationsDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListAchPrenotificationsDefaultApplicationJson2TypeEnum;
}
export declare enum ListAchPrenotificationsDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListAchPrenotificationsDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListAchPrenotificationsDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListAchPrenotificationsDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListAchPrenotificationsDefaultApplicationJson1TypeEnum;
}
export declare class ListAchPrenotificationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ACH Prenotification List
     */
    achPrenotificationList?: shared.AchPrenotificationList;
    /**
     * Error
     */
    error?: any;
}
