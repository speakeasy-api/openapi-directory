import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAnAchReturnDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CreateAnAchReturnDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CreateAnAchReturnDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CreateAnAchReturnDefaultApplicationJson13StatusEnum;
    title: string;
    type: CreateAnAchReturnDefaultApplicationJson13TypeEnum;
}
export declare enum CreateAnAchReturnDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnAchReturnDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CreateAnAchReturnDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchReturnDefaultApplicationJson12StatusEnum;
    title: string;
    type: CreateAnAchReturnDefaultApplicationJson12TypeEnum;
}
export declare enum CreateAnAchReturnDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAnAchReturnDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CreateAnAchReturnDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchReturnDefaultApplicationJson11StatusEnum;
    title: string;
    type: CreateAnAchReturnDefaultApplicationJson11TypeEnum;
}
export declare enum CreateAnAchReturnDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAnAchReturnDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CreateAnAchReturnDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchReturnDefaultApplicationJson10StatusEnum;
    title: string;
    type: CreateAnAchReturnDefaultApplicationJson10TypeEnum;
}
export declare enum CreateAnAchReturnDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAnAchReturnDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CreateAnAchReturnDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CreateAnAchReturnDefaultApplicationJson9StatusEnum;
    title: string;
    type: CreateAnAchReturnDefaultApplicationJson9TypeEnum;
}
export declare enum CreateAnAchReturnDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAnAchReturnDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CreateAnAchReturnDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchReturnDefaultApplicationJson8StatusEnum;
    title: string;
    type: CreateAnAchReturnDefaultApplicationJson8TypeEnum;
}
export declare enum CreateAnAchReturnDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CreateAnAchReturnDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CreateAnAchReturnDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchReturnDefaultApplicationJson7StatusEnum;
    title: string;
    type: CreateAnAchReturnDefaultApplicationJson7TypeEnum;
}
export declare enum CreateAnAchReturnDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CreateAnAchReturnDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CreateAnAchReturnDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchReturnDefaultApplicationJson6StatusEnum;
    title: string;
    type: CreateAnAchReturnDefaultApplicationJson6TypeEnum;
}
export declare enum CreateAnAchReturnDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnAchReturnDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CreateAnAchReturnDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchReturnDefaultApplicationJson5StatusEnum;
    title: string;
    type: CreateAnAchReturnDefaultApplicationJson5TypeEnum;
}
export declare enum CreateAnAchReturnDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CreateAnAchReturnDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CreateAnAchReturnDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchReturnDefaultApplicationJson4StatusEnum;
    title: string;
    type: CreateAnAchReturnDefaultApplicationJson4TypeEnum;
}
export declare enum CreateAnAchReturnDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAnAchReturnDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CreateAnAchReturnDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchReturnDefaultApplicationJson3StatusEnum;
    title: string;
    type: CreateAnAchReturnDefaultApplicationJson3TypeEnum;
}
export declare enum CreateAnAchReturnDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnAchReturnDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CreateAnAchReturnDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchReturnDefaultApplicationJson2StatusEnum;
    title: string;
    type: CreateAnAchReturnDefaultApplicationJson2TypeEnum;
}
export declare enum CreateAnAchReturnDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAnAchReturnDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CreateAnAchReturnDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAchReturnDefaultApplicationJson1StatusEnum;
    title: string;
    type: CreateAnAchReturnDefaultApplicationJson1TypeEnum;
}
export declare class CreateAnAchReturnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Inbound ACH Transfer Return
     */
    inboundAchTransferReturn?: shared.InboundAchTransferReturn;
}
