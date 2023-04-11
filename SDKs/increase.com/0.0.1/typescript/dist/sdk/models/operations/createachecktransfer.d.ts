import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateACheckTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CreateACheckTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CreateACheckTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CreateACheckTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: CreateACheckTransferDefaultApplicationJson13TypeEnum;
}
export declare enum CreateACheckTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateACheckTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CreateACheckTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CreateACheckTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: CreateACheckTransferDefaultApplicationJson12TypeEnum;
}
export declare enum CreateACheckTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateACheckTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CreateACheckTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CreateACheckTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: CreateACheckTransferDefaultApplicationJson11TypeEnum;
}
export declare enum CreateACheckTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CreateACheckTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CreateACheckTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CreateACheckTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: CreateACheckTransferDefaultApplicationJson10TypeEnum;
}
export declare enum CreateACheckTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CreateACheckTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CreateACheckTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CreateACheckTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: CreateACheckTransferDefaultApplicationJson9TypeEnum;
}
export declare enum CreateACheckTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateACheckTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CreateACheckTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CreateACheckTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: CreateACheckTransferDefaultApplicationJson8TypeEnum;
}
export declare enum CreateACheckTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CreateACheckTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CreateACheckTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CreateACheckTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: CreateACheckTransferDefaultApplicationJson7TypeEnum;
}
export declare enum CreateACheckTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CreateACheckTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CreateACheckTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CreateACheckTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: CreateACheckTransferDefaultApplicationJson6TypeEnum;
}
export declare enum CreateACheckTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateACheckTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CreateACheckTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CreateACheckTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: CreateACheckTransferDefaultApplicationJson5TypeEnum;
}
export declare enum CreateACheckTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CreateACheckTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CreateACheckTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CreateACheckTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: CreateACheckTransferDefaultApplicationJson4TypeEnum;
}
export declare enum CreateACheckTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateACheckTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CreateACheckTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CreateACheckTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: CreateACheckTransferDefaultApplicationJson3TypeEnum;
}
export declare enum CreateACheckTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateACheckTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CreateACheckTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CreateACheckTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: CreateACheckTransferDefaultApplicationJson2TypeEnum;
}
export declare enum CreateACheckTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateACheckTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CreateACheckTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CreateACheckTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: CreateACheckTransferDefaultApplicationJson1TypeEnum;
}
export declare class CreateACheckTransferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Check Transfer
     */
    checkTransfer?: shared.CheckTransfer;
    /**
     * Error
     */
    error?: any;
}
