import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateACardDisputeDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CreateACardDisputeDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CreateACardDisputeDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CreateACardDisputeDefaultApplicationJson13StatusEnum;
    title: string;
    type: CreateACardDisputeDefaultApplicationJson13TypeEnum;
}
export declare enum CreateACardDisputeDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateACardDisputeDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CreateACardDisputeDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CreateACardDisputeDefaultApplicationJson12StatusEnum;
    title: string;
    type: CreateACardDisputeDefaultApplicationJson12TypeEnum;
}
export declare enum CreateACardDisputeDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateACardDisputeDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CreateACardDisputeDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CreateACardDisputeDefaultApplicationJson11StatusEnum;
    title: string;
    type: CreateACardDisputeDefaultApplicationJson11TypeEnum;
}
export declare enum CreateACardDisputeDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CreateACardDisputeDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CreateACardDisputeDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CreateACardDisputeDefaultApplicationJson10StatusEnum;
    title: string;
    type: CreateACardDisputeDefaultApplicationJson10TypeEnum;
}
export declare enum CreateACardDisputeDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CreateACardDisputeDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CreateACardDisputeDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CreateACardDisputeDefaultApplicationJson9StatusEnum;
    title: string;
    type: CreateACardDisputeDefaultApplicationJson9TypeEnum;
}
export declare enum CreateACardDisputeDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateACardDisputeDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CreateACardDisputeDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CreateACardDisputeDefaultApplicationJson8StatusEnum;
    title: string;
    type: CreateACardDisputeDefaultApplicationJson8TypeEnum;
}
export declare enum CreateACardDisputeDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CreateACardDisputeDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CreateACardDisputeDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CreateACardDisputeDefaultApplicationJson7StatusEnum;
    title: string;
    type: CreateACardDisputeDefaultApplicationJson7TypeEnum;
}
export declare enum CreateACardDisputeDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CreateACardDisputeDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CreateACardDisputeDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CreateACardDisputeDefaultApplicationJson6StatusEnum;
    title: string;
    type: CreateACardDisputeDefaultApplicationJson6TypeEnum;
}
export declare enum CreateACardDisputeDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateACardDisputeDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CreateACardDisputeDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CreateACardDisputeDefaultApplicationJson5StatusEnum;
    title: string;
    type: CreateACardDisputeDefaultApplicationJson5TypeEnum;
}
export declare enum CreateACardDisputeDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CreateACardDisputeDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CreateACardDisputeDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CreateACardDisputeDefaultApplicationJson4StatusEnum;
    title: string;
    type: CreateACardDisputeDefaultApplicationJson4TypeEnum;
}
export declare enum CreateACardDisputeDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateACardDisputeDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CreateACardDisputeDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CreateACardDisputeDefaultApplicationJson3StatusEnum;
    title: string;
    type: CreateACardDisputeDefaultApplicationJson3TypeEnum;
}
export declare enum CreateACardDisputeDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateACardDisputeDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CreateACardDisputeDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CreateACardDisputeDefaultApplicationJson2StatusEnum;
    title: string;
    type: CreateACardDisputeDefaultApplicationJson2TypeEnum;
}
export declare enum CreateACardDisputeDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateACardDisputeDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CreateACardDisputeDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CreateACardDisputeDefaultApplicationJson1StatusEnum;
    title: string;
    type: CreateACardDisputeDefaultApplicationJson1TypeEnum;
}
export declare class CreateACardDisputeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Card Dispute
     */
    cardDispute?: shared.CardDispute;
    /**
     * Error
     */
    error?: any;
}
