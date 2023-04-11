import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateACardDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CreateACardDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CreateACardDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CreateACardDefaultApplicationJson13StatusEnum;
    title: string;
    type: CreateACardDefaultApplicationJson13TypeEnum;
}
export declare enum CreateACardDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateACardDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CreateACardDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CreateACardDefaultApplicationJson12StatusEnum;
    title: string;
    type: CreateACardDefaultApplicationJson12TypeEnum;
}
export declare enum CreateACardDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateACardDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CreateACardDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CreateACardDefaultApplicationJson11StatusEnum;
    title: string;
    type: CreateACardDefaultApplicationJson11TypeEnum;
}
export declare enum CreateACardDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CreateACardDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CreateACardDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CreateACardDefaultApplicationJson10StatusEnum;
    title: string;
    type: CreateACardDefaultApplicationJson10TypeEnum;
}
export declare enum CreateACardDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CreateACardDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CreateACardDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CreateACardDefaultApplicationJson9StatusEnum;
    title: string;
    type: CreateACardDefaultApplicationJson9TypeEnum;
}
export declare enum CreateACardDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateACardDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CreateACardDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CreateACardDefaultApplicationJson8StatusEnum;
    title: string;
    type: CreateACardDefaultApplicationJson8TypeEnum;
}
export declare enum CreateACardDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CreateACardDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CreateACardDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CreateACardDefaultApplicationJson7StatusEnum;
    title: string;
    type: CreateACardDefaultApplicationJson7TypeEnum;
}
export declare enum CreateACardDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CreateACardDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CreateACardDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CreateACardDefaultApplicationJson6StatusEnum;
    title: string;
    type: CreateACardDefaultApplicationJson6TypeEnum;
}
export declare enum CreateACardDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateACardDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CreateACardDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CreateACardDefaultApplicationJson5StatusEnum;
    title: string;
    type: CreateACardDefaultApplicationJson5TypeEnum;
}
export declare enum CreateACardDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CreateACardDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CreateACardDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CreateACardDefaultApplicationJson4StatusEnum;
    title: string;
    type: CreateACardDefaultApplicationJson4TypeEnum;
}
export declare enum CreateACardDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateACardDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CreateACardDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CreateACardDefaultApplicationJson3StatusEnum;
    title: string;
    type: CreateACardDefaultApplicationJson3TypeEnum;
}
export declare enum CreateACardDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateACardDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CreateACardDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CreateACardDefaultApplicationJson2StatusEnum;
    title: string;
    type: CreateACardDefaultApplicationJson2TypeEnum;
}
export declare enum CreateACardDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateACardDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CreateACardDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CreateACardDefaultApplicationJson1StatusEnum;
    title: string;
    type: CreateACardDefaultApplicationJson1TypeEnum;
}
export declare class CreateACardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Card
     */
    card?: shared.Card;
    /**
     * Error
     */
    error?: any;
}
