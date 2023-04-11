import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListEntitiesRequest extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
}
export declare enum ListEntitiesDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListEntitiesDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListEntitiesDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListEntitiesDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListEntitiesDefaultApplicationJson13TypeEnum;
}
export declare enum ListEntitiesDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListEntitiesDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListEntitiesDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListEntitiesDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListEntitiesDefaultApplicationJson12TypeEnum;
}
export declare enum ListEntitiesDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListEntitiesDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListEntitiesDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListEntitiesDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListEntitiesDefaultApplicationJson11TypeEnum;
}
export declare enum ListEntitiesDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListEntitiesDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListEntitiesDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListEntitiesDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListEntitiesDefaultApplicationJson10TypeEnum;
}
export declare enum ListEntitiesDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListEntitiesDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListEntitiesDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListEntitiesDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListEntitiesDefaultApplicationJson9TypeEnum;
}
export declare enum ListEntitiesDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListEntitiesDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListEntitiesDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListEntitiesDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListEntitiesDefaultApplicationJson8TypeEnum;
}
export declare enum ListEntitiesDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListEntitiesDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListEntitiesDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListEntitiesDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListEntitiesDefaultApplicationJson7TypeEnum;
}
export declare enum ListEntitiesDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListEntitiesDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListEntitiesDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListEntitiesDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListEntitiesDefaultApplicationJson6TypeEnum;
}
export declare enum ListEntitiesDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListEntitiesDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListEntitiesDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListEntitiesDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListEntitiesDefaultApplicationJson5TypeEnum;
}
export declare enum ListEntitiesDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListEntitiesDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListEntitiesDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListEntitiesDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListEntitiesDefaultApplicationJson4TypeEnum;
}
export declare enum ListEntitiesDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListEntitiesDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListEntitiesDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListEntitiesDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListEntitiesDefaultApplicationJson3TypeEnum;
}
export declare enum ListEntitiesDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListEntitiesDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListEntitiesDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListEntitiesDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListEntitiesDefaultApplicationJson2TypeEnum;
}
export declare enum ListEntitiesDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListEntitiesDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListEntitiesDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListEntitiesDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListEntitiesDefaultApplicationJson1TypeEnum;
}
export declare class ListEntitiesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Entity List
     */
    entityList?: shared.EntityList;
    /**
     * Error
     */
    error?: any;
}
