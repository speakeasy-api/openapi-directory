import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAnAchTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CreateAnAchTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CreateAnAchTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CreateAnAchTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: CreateAnAchTransferDefaultApplicationJson13TypeEnum;
}
export declare enum CreateAnAchTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnAchTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CreateAnAchTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: CreateAnAchTransferDefaultApplicationJson12TypeEnum;
}
export declare enum CreateAnAchTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAnAchTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CreateAnAchTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: CreateAnAchTransferDefaultApplicationJson11TypeEnum;
}
export declare enum CreateAnAchTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAnAchTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CreateAnAchTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: CreateAnAchTransferDefaultApplicationJson10TypeEnum;
}
export declare enum CreateAnAchTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAnAchTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CreateAnAchTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CreateAnAchTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: CreateAnAchTransferDefaultApplicationJson9TypeEnum;
}
export declare enum CreateAnAchTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAnAchTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CreateAnAchTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: CreateAnAchTransferDefaultApplicationJson8TypeEnum;
}
export declare enum CreateAnAchTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CreateAnAchTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CreateAnAchTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: CreateAnAchTransferDefaultApplicationJson7TypeEnum;
}
export declare enum CreateAnAchTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CreateAnAchTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CreateAnAchTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: CreateAnAchTransferDefaultApplicationJson6TypeEnum;
}
export declare enum CreateAnAchTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnAchTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CreateAnAchTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: CreateAnAchTransferDefaultApplicationJson5TypeEnum;
}
export declare enum CreateAnAchTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CreateAnAchTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CreateAnAchTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: CreateAnAchTransferDefaultApplicationJson4TypeEnum;
}
export declare enum CreateAnAchTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAnAchTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CreateAnAchTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: CreateAnAchTransferDefaultApplicationJson3TypeEnum;
}
export declare enum CreateAnAchTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnAchTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CreateAnAchTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: CreateAnAchTransferDefaultApplicationJson2TypeEnum;
}
export declare enum CreateAnAchTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAnAchTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CreateAnAchTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: CreateAnAchTransferDefaultApplicationJson1TypeEnum;
}
export declare class CreateAnAchTransferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ACH Transfer
     */
    achTransfer?: shared.AchTransfer;
    /**
     * Error
     */
    error?: any;
}
