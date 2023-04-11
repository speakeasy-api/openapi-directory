import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAnEntityRequest extends SpeakeasyBase {
    entityId: string;
}
export declare enum RetrieveAnEntityDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveAnEntityDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveAnEntityDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveAnEntityDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveAnEntityDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveAnEntityDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnEntityDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveAnEntityDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEntityDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveAnEntityDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveAnEntityDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnEntityDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveAnEntityDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEntityDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveAnEntityDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveAnEntityDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnEntityDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveAnEntityDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEntityDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveAnEntityDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveAnEntityDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnEntityDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveAnEntityDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveAnEntityDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveAnEntityDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveAnEntityDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnEntityDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveAnEntityDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEntityDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveAnEntityDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveAnEntityDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveAnEntityDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveAnEntityDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEntityDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveAnEntityDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveAnEntityDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveAnEntityDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveAnEntityDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEntityDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveAnEntityDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveAnEntityDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnEntityDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveAnEntityDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEntityDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveAnEntityDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveAnEntityDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveAnEntityDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveAnEntityDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEntityDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveAnEntityDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveAnEntityDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnEntityDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveAnEntityDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEntityDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveAnEntityDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveAnEntityDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnEntityDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveAnEntityDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEntityDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveAnEntityDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveAnEntityDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnEntityDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveAnEntityDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnEntityDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveAnEntityDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveAnEntityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Entity
     */
    entity?: shared.Entity;
    /**
     * Error
     */
    error?: any;
}
