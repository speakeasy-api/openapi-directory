import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListCardsRequest extends SpeakeasyBase {
    accountId?: string;
    createdAtAfter?: Date;
    createdAtBefore?: Date;
    createdAtOnOrAfter?: Date;
    createdAtOnOrBefore?: Date;
    cursor?: string;
    limit?: number;
}
export declare enum ListCardsDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListCardsDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListCardsDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListCardsDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListCardsDefaultApplicationJson13TypeEnum;
}
export declare enum ListCardsDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListCardsDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListCardsDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListCardsDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListCardsDefaultApplicationJson12TypeEnum;
}
export declare enum ListCardsDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListCardsDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListCardsDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListCardsDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListCardsDefaultApplicationJson11TypeEnum;
}
export declare enum ListCardsDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListCardsDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListCardsDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListCardsDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListCardsDefaultApplicationJson10TypeEnum;
}
export declare enum ListCardsDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListCardsDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListCardsDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListCardsDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListCardsDefaultApplicationJson9TypeEnum;
}
export declare enum ListCardsDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListCardsDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListCardsDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListCardsDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListCardsDefaultApplicationJson8TypeEnum;
}
export declare enum ListCardsDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListCardsDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListCardsDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListCardsDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListCardsDefaultApplicationJson7TypeEnum;
}
export declare enum ListCardsDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListCardsDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListCardsDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListCardsDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListCardsDefaultApplicationJson6TypeEnum;
}
export declare enum ListCardsDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListCardsDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListCardsDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListCardsDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListCardsDefaultApplicationJson5TypeEnum;
}
export declare enum ListCardsDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListCardsDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListCardsDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListCardsDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListCardsDefaultApplicationJson4TypeEnum;
}
export declare enum ListCardsDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListCardsDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListCardsDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListCardsDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListCardsDefaultApplicationJson3TypeEnum;
}
export declare enum ListCardsDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListCardsDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListCardsDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListCardsDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListCardsDefaultApplicationJson2TypeEnum;
}
export declare enum ListCardsDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListCardsDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListCardsDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListCardsDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListCardsDefaultApplicationJson1TypeEnum;
}
export declare class ListCardsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Card List
     */
    cardList?: shared.CardList;
    /**
     * Error
     */
    error?: any;
}
