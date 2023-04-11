import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateACardProfileDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CreateACardProfileDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CreateACardProfileDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CreateACardProfileDefaultApplicationJson13StatusEnum;
    title: string;
    type: CreateACardProfileDefaultApplicationJson13TypeEnum;
}
export declare enum CreateACardProfileDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateACardProfileDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CreateACardProfileDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CreateACardProfileDefaultApplicationJson12StatusEnum;
    title: string;
    type: CreateACardProfileDefaultApplicationJson12TypeEnum;
}
export declare enum CreateACardProfileDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateACardProfileDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CreateACardProfileDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CreateACardProfileDefaultApplicationJson11StatusEnum;
    title: string;
    type: CreateACardProfileDefaultApplicationJson11TypeEnum;
}
export declare enum CreateACardProfileDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CreateACardProfileDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CreateACardProfileDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CreateACardProfileDefaultApplicationJson10StatusEnum;
    title: string;
    type: CreateACardProfileDefaultApplicationJson10TypeEnum;
}
export declare enum CreateACardProfileDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CreateACardProfileDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CreateACardProfileDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CreateACardProfileDefaultApplicationJson9StatusEnum;
    title: string;
    type: CreateACardProfileDefaultApplicationJson9TypeEnum;
}
export declare enum CreateACardProfileDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateACardProfileDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CreateACardProfileDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CreateACardProfileDefaultApplicationJson8StatusEnum;
    title: string;
    type: CreateACardProfileDefaultApplicationJson8TypeEnum;
}
export declare enum CreateACardProfileDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CreateACardProfileDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CreateACardProfileDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CreateACardProfileDefaultApplicationJson7StatusEnum;
    title: string;
    type: CreateACardProfileDefaultApplicationJson7TypeEnum;
}
export declare enum CreateACardProfileDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CreateACardProfileDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CreateACardProfileDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CreateACardProfileDefaultApplicationJson6StatusEnum;
    title: string;
    type: CreateACardProfileDefaultApplicationJson6TypeEnum;
}
export declare enum CreateACardProfileDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateACardProfileDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CreateACardProfileDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CreateACardProfileDefaultApplicationJson5StatusEnum;
    title: string;
    type: CreateACardProfileDefaultApplicationJson5TypeEnum;
}
export declare enum CreateACardProfileDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CreateACardProfileDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CreateACardProfileDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CreateACardProfileDefaultApplicationJson4StatusEnum;
    title: string;
    type: CreateACardProfileDefaultApplicationJson4TypeEnum;
}
export declare enum CreateACardProfileDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateACardProfileDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CreateACardProfileDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CreateACardProfileDefaultApplicationJson3StatusEnum;
    title: string;
    type: CreateACardProfileDefaultApplicationJson3TypeEnum;
}
export declare enum CreateACardProfileDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateACardProfileDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CreateACardProfileDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CreateACardProfileDefaultApplicationJson2StatusEnum;
    title: string;
    type: CreateACardProfileDefaultApplicationJson2TypeEnum;
}
export declare enum CreateACardProfileDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateACardProfileDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CreateACardProfileDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CreateACardProfileDefaultApplicationJson1StatusEnum;
    title: string;
    type: CreateACardProfileDefaultApplicationJson1TypeEnum;
}
export declare class CreateACardProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Card Profile
     */
    cardProfile?: shared.CardProfile;
    /**
     * Error
     */
    error?: any;
}
