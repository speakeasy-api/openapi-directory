import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAnOauthConnectionRequest extends SpeakeasyBase {
    oauthConnectionId: string;
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveAnOauthConnectionDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveAnOauthConnectionDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveAnOauthConnectionDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveAnOauthConnectionDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnOauthConnectionDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveAnOauthConnectionDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveAnOauthConnectionDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnOauthConnectionDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveAnOauthConnectionDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveAnOauthConnectionDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnOauthConnectionDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveAnOauthConnectionDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveAnOauthConnectionDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveAnOauthConnectionDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveAnOauthConnectionDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveAnOauthConnectionDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnOauthConnectionDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveAnOauthConnectionDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveAnOauthConnectionDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnOauthConnectionDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveAnOauthConnectionDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveAnOauthConnectionDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnOauthConnectionDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveAnOauthConnectionDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveAnOauthConnectionDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnOauthConnectionDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveAnOauthConnectionDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveAnOauthConnectionDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnOauthConnectionDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveAnOauthConnectionDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveAnOauthConnectionDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnOauthConnectionDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveAnOauthConnectionDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveAnOauthConnectionDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnOauthConnectionDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveAnOauthConnectionDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnOauthConnectionDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveAnOauthConnectionDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnOauthConnectionDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveAnOauthConnectionDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveAnOauthConnectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * OAuth Connection
     */
    oauthConnection?: shared.OauthConnection;
}
