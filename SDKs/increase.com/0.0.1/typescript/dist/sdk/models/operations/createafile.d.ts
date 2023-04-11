import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAFileDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CreateAFileDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CreateAFileDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CreateAFileDefaultApplicationJson13StatusEnum;
    title: string;
    type: CreateAFileDefaultApplicationJson13TypeEnum;
}
export declare enum CreateAFileDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAFileDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CreateAFileDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CreateAFileDefaultApplicationJson12StatusEnum;
    title: string;
    type: CreateAFileDefaultApplicationJson12TypeEnum;
}
export declare enum CreateAFileDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAFileDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CreateAFileDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CreateAFileDefaultApplicationJson11StatusEnum;
    title: string;
    type: CreateAFileDefaultApplicationJson11TypeEnum;
}
export declare enum CreateAFileDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAFileDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CreateAFileDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CreateAFileDefaultApplicationJson10StatusEnum;
    title: string;
    type: CreateAFileDefaultApplicationJson10TypeEnum;
}
export declare enum CreateAFileDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAFileDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CreateAFileDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CreateAFileDefaultApplicationJson9StatusEnum;
    title: string;
    type: CreateAFileDefaultApplicationJson9TypeEnum;
}
export declare enum CreateAFileDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAFileDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CreateAFileDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CreateAFileDefaultApplicationJson8StatusEnum;
    title: string;
    type: CreateAFileDefaultApplicationJson8TypeEnum;
}
export declare enum CreateAFileDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CreateAFileDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CreateAFileDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CreateAFileDefaultApplicationJson7StatusEnum;
    title: string;
    type: CreateAFileDefaultApplicationJson7TypeEnum;
}
export declare enum CreateAFileDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CreateAFileDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CreateAFileDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CreateAFileDefaultApplicationJson6StatusEnum;
    title: string;
    type: CreateAFileDefaultApplicationJson6TypeEnum;
}
export declare enum CreateAFileDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAFileDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CreateAFileDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CreateAFileDefaultApplicationJson5StatusEnum;
    title: string;
    type: CreateAFileDefaultApplicationJson5TypeEnum;
}
export declare enum CreateAFileDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CreateAFileDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CreateAFileDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CreateAFileDefaultApplicationJson4StatusEnum;
    title: string;
    type: CreateAFileDefaultApplicationJson4TypeEnum;
}
export declare enum CreateAFileDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAFileDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CreateAFileDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CreateAFileDefaultApplicationJson3StatusEnum;
    title: string;
    type: CreateAFileDefaultApplicationJson3TypeEnum;
}
export declare enum CreateAFileDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAFileDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CreateAFileDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CreateAFileDefaultApplicationJson2StatusEnum;
    title: string;
    type: CreateAFileDefaultApplicationJson2TypeEnum;
}
export declare enum CreateAFileDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAFileDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CreateAFileDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CreateAFileDefaultApplicationJson1StatusEnum;
    title: string;
    type: CreateAFileDefaultApplicationJson1TypeEnum;
}
export declare class CreateAFileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * File
     */
    file?: shared.File;
}
