import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListOauthConnectionsRequest extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
}
export declare enum ListOauthConnectionsDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListOauthConnectionsDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListOauthConnectionsDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListOauthConnectionsDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListOauthConnectionsDefaultApplicationJson13TypeEnum;
}
export declare enum ListOauthConnectionsDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListOauthConnectionsDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListOauthConnectionsDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListOauthConnectionsDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListOauthConnectionsDefaultApplicationJson12TypeEnum;
}
export declare enum ListOauthConnectionsDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListOauthConnectionsDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListOauthConnectionsDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListOauthConnectionsDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListOauthConnectionsDefaultApplicationJson11TypeEnum;
}
export declare enum ListOauthConnectionsDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListOauthConnectionsDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListOauthConnectionsDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListOauthConnectionsDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListOauthConnectionsDefaultApplicationJson10TypeEnum;
}
export declare enum ListOauthConnectionsDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListOauthConnectionsDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListOauthConnectionsDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListOauthConnectionsDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListOauthConnectionsDefaultApplicationJson9TypeEnum;
}
export declare enum ListOauthConnectionsDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListOauthConnectionsDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListOauthConnectionsDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListOauthConnectionsDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListOauthConnectionsDefaultApplicationJson8TypeEnum;
}
export declare enum ListOauthConnectionsDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListOauthConnectionsDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListOauthConnectionsDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListOauthConnectionsDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListOauthConnectionsDefaultApplicationJson7TypeEnum;
}
export declare enum ListOauthConnectionsDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListOauthConnectionsDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListOauthConnectionsDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListOauthConnectionsDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListOauthConnectionsDefaultApplicationJson6TypeEnum;
}
export declare enum ListOauthConnectionsDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListOauthConnectionsDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListOauthConnectionsDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListOauthConnectionsDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListOauthConnectionsDefaultApplicationJson5TypeEnum;
}
export declare enum ListOauthConnectionsDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListOauthConnectionsDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListOauthConnectionsDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListOauthConnectionsDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListOauthConnectionsDefaultApplicationJson4TypeEnum;
}
export declare enum ListOauthConnectionsDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListOauthConnectionsDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListOauthConnectionsDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListOauthConnectionsDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListOauthConnectionsDefaultApplicationJson3TypeEnum;
}
export declare enum ListOauthConnectionsDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListOauthConnectionsDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListOauthConnectionsDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListOauthConnectionsDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListOauthConnectionsDefaultApplicationJson2TypeEnum;
}
export declare enum ListOauthConnectionsDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListOauthConnectionsDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListOauthConnectionsDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListOauthConnectionsDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListOauthConnectionsDefaultApplicationJson1TypeEnum;
}
export declare class ListOauthConnectionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * OAuth Connection List
     */
    oauthConnectionList?: shared.OauthConnectionList;
}
