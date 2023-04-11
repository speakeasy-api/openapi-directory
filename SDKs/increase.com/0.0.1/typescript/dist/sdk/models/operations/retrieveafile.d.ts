import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAFileRequest extends SpeakeasyBase {
    fileId: string;
}
export declare enum RetrieveAFileDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveAFileDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveAFileDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveAFileDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveAFileDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveAFileDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAFileDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveAFileDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAFileDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveAFileDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveAFileDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAFileDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveAFileDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAFileDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveAFileDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveAFileDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAFileDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveAFileDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAFileDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveAFileDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveAFileDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAFileDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveAFileDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveAFileDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveAFileDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveAFileDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAFileDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveAFileDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAFileDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveAFileDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveAFileDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveAFileDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveAFileDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAFileDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveAFileDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveAFileDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveAFileDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveAFileDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAFileDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveAFileDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveAFileDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAFileDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveAFileDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAFileDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveAFileDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveAFileDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveAFileDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveAFileDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAFileDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveAFileDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveAFileDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAFileDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveAFileDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAFileDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveAFileDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveAFileDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAFileDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveAFileDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAFileDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveAFileDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveAFileDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAFileDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveAFileDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAFileDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveAFileDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveAFileResponse extends SpeakeasyBase {
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
