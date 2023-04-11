import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveACardProfileRequest extends SpeakeasyBase {
    cardProfileId: string;
}
export declare enum RetrieveACardProfileDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveACardProfileDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveACardProfileDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveACardProfileDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveACardProfileDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveACardProfileDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveACardProfileDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveACardProfileDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardProfileDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveACardProfileDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveACardProfileDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveACardProfileDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveACardProfileDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardProfileDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveACardProfileDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveACardProfileDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveACardProfileDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveACardProfileDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardProfileDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveACardProfileDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveACardProfileDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveACardProfileDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveACardProfileDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveACardProfileDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveACardProfileDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveACardProfileDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveACardProfileDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveACardProfileDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardProfileDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveACardProfileDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveACardProfileDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveACardProfileDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveACardProfileDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardProfileDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveACardProfileDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveACardProfileDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveACardProfileDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveACardProfileDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardProfileDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveACardProfileDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveACardProfileDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveACardProfileDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveACardProfileDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardProfileDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveACardProfileDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveACardProfileDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveACardProfileDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveACardProfileDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardProfileDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveACardProfileDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveACardProfileDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveACardProfileDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveACardProfileDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardProfileDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveACardProfileDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveACardProfileDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveACardProfileDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveACardProfileDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardProfileDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveACardProfileDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveACardProfileDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveACardProfileDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveACardProfileDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveACardProfileDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveACardProfileDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveACardProfileResponse extends SpeakeasyBase {
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
