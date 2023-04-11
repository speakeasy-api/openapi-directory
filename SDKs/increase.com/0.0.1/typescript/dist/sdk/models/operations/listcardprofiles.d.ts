import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListCardProfilesStatusInEnum {
    Pending = "pending",
    Rejected = "rejected",
    Active = "active",
    Archived = "archived"
}
export declare class ListCardProfilesRequest extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
    statusIn?: ListCardProfilesStatusInEnum[];
}
export declare enum ListCardProfilesDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListCardProfilesDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListCardProfilesDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListCardProfilesDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListCardProfilesDefaultApplicationJson13TypeEnum;
}
export declare enum ListCardProfilesDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListCardProfilesDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListCardProfilesDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListCardProfilesDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListCardProfilesDefaultApplicationJson12TypeEnum;
}
export declare enum ListCardProfilesDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListCardProfilesDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListCardProfilesDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListCardProfilesDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListCardProfilesDefaultApplicationJson11TypeEnum;
}
export declare enum ListCardProfilesDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListCardProfilesDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListCardProfilesDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListCardProfilesDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListCardProfilesDefaultApplicationJson10TypeEnum;
}
export declare enum ListCardProfilesDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListCardProfilesDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListCardProfilesDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListCardProfilesDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListCardProfilesDefaultApplicationJson9TypeEnum;
}
export declare enum ListCardProfilesDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListCardProfilesDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListCardProfilesDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListCardProfilesDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListCardProfilesDefaultApplicationJson8TypeEnum;
}
export declare enum ListCardProfilesDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListCardProfilesDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListCardProfilesDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListCardProfilesDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListCardProfilesDefaultApplicationJson7TypeEnum;
}
export declare enum ListCardProfilesDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListCardProfilesDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListCardProfilesDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListCardProfilesDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListCardProfilesDefaultApplicationJson6TypeEnum;
}
export declare enum ListCardProfilesDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListCardProfilesDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListCardProfilesDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListCardProfilesDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListCardProfilesDefaultApplicationJson5TypeEnum;
}
export declare enum ListCardProfilesDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListCardProfilesDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListCardProfilesDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListCardProfilesDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListCardProfilesDefaultApplicationJson4TypeEnum;
}
export declare enum ListCardProfilesDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListCardProfilesDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListCardProfilesDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListCardProfilesDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListCardProfilesDefaultApplicationJson3TypeEnum;
}
export declare enum ListCardProfilesDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListCardProfilesDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListCardProfilesDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListCardProfilesDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListCardProfilesDefaultApplicationJson2TypeEnum;
}
export declare enum ListCardProfilesDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListCardProfilesDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListCardProfilesDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListCardProfilesDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListCardProfilesDefaultApplicationJson1TypeEnum;
}
export declare class ListCardProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Card Profile List
     */
    cardProfileList?: shared.CardProfileList;
    /**
     * Error
     */
    error?: any;
}
