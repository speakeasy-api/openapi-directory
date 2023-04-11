import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAnEntityDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CreateAnEntityDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CreateAnEntityDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CreateAnEntityDefaultApplicationJson13StatusEnum;
    title: string;
    type: CreateAnEntityDefaultApplicationJson13TypeEnum;
}
export declare enum CreateAnEntityDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnEntityDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CreateAnEntityDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CreateAnEntityDefaultApplicationJson12StatusEnum;
    title: string;
    type: CreateAnEntityDefaultApplicationJson12TypeEnum;
}
export declare enum CreateAnEntityDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAnEntityDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CreateAnEntityDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CreateAnEntityDefaultApplicationJson11StatusEnum;
    title: string;
    type: CreateAnEntityDefaultApplicationJson11TypeEnum;
}
export declare enum CreateAnEntityDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAnEntityDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CreateAnEntityDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CreateAnEntityDefaultApplicationJson10StatusEnum;
    title: string;
    type: CreateAnEntityDefaultApplicationJson10TypeEnum;
}
export declare enum CreateAnEntityDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAnEntityDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CreateAnEntityDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CreateAnEntityDefaultApplicationJson9StatusEnum;
    title: string;
    type: CreateAnEntityDefaultApplicationJson9TypeEnum;
}
export declare enum CreateAnEntityDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAnEntityDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CreateAnEntityDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CreateAnEntityDefaultApplicationJson8StatusEnum;
    title: string;
    type: CreateAnEntityDefaultApplicationJson8TypeEnum;
}
export declare enum CreateAnEntityDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CreateAnEntityDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CreateAnEntityDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CreateAnEntityDefaultApplicationJson7StatusEnum;
    title: string;
    type: CreateAnEntityDefaultApplicationJson7TypeEnum;
}
export declare enum CreateAnEntityDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CreateAnEntityDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CreateAnEntityDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CreateAnEntityDefaultApplicationJson6StatusEnum;
    title: string;
    type: CreateAnEntityDefaultApplicationJson6TypeEnum;
}
export declare enum CreateAnEntityDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnEntityDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CreateAnEntityDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CreateAnEntityDefaultApplicationJson5StatusEnum;
    title: string;
    type: CreateAnEntityDefaultApplicationJson5TypeEnum;
}
export declare enum CreateAnEntityDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CreateAnEntityDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CreateAnEntityDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CreateAnEntityDefaultApplicationJson4StatusEnum;
    title: string;
    type: CreateAnEntityDefaultApplicationJson4TypeEnum;
}
export declare enum CreateAnEntityDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAnEntityDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CreateAnEntityDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CreateAnEntityDefaultApplicationJson3StatusEnum;
    title: string;
    type: CreateAnEntityDefaultApplicationJson3TypeEnum;
}
export declare enum CreateAnEntityDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnEntityDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CreateAnEntityDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CreateAnEntityDefaultApplicationJson2StatusEnum;
    title: string;
    type: CreateAnEntityDefaultApplicationJson2TypeEnum;
}
export declare enum CreateAnEntityDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAnEntityDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CreateAnEntityDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CreateAnEntityDefaultApplicationJson1StatusEnum;
    title: string;
    type: CreateAnEntityDefaultApplicationJson1TypeEnum;
}
export declare class CreateAnEntityResponse extends SpeakeasyBase {
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
