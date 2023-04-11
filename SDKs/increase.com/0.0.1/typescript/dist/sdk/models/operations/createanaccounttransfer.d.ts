import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAnAccountTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CreateAnAccountTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CreateAnAccountTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CreateAnAccountTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: CreateAnAccountTransferDefaultApplicationJson13TypeEnum;
}
export declare enum CreateAnAccountTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnAccountTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CreateAnAccountTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: CreateAnAccountTransferDefaultApplicationJson12TypeEnum;
}
export declare enum CreateAnAccountTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAnAccountTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CreateAnAccountTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: CreateAnAccountTransferDefaultApplicationJson11TypeEnum;
}
export declare enum CreateAnAccountTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAnAccountTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CreateAnAccountTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: CreateAnAccountTransferDefaultApplicationJson10TypeEnum;
}
export declare enum CreateAnAccountTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAnAccountTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CreateAnAccountTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CreateAnAccountTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: CreateAnAccountTransferDefaultApplicationJson9TypeEnum;
}
export declare enum CreateAnAccountTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAnAccountTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CreateAnAccountTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: CreateAnAccountTransferDefaultApplicationJson8TypeEnum;
}
export declare enum CreateAnAccountTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CreateAnAccountTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CreateAnAccountTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: CreateAnAccountTransferDefaultApplicationJson7TypeEnum;
}
export declare enum CreateAnAccountTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CreateAnAccountTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CreateAnAccountTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: CreateAnAccountTransferDefaultApplicationJson6TypeEnum;
}
export declare enum CreateAnAccountTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnAccountTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CreateAnAccountTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: CreateAnAccountTransferDefaultApplicationJson5TypeEnum;
}
export declare enum CreateAnAccountTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CreateAnAccountTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CreateAnAccountTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: CreateAnAccountTransferDefaultApplicationJson4TypeEnum;
}
export declare enum CreateAnAccountTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAnAccountTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CreateAnAccountTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: CreateAnAccountTransferDefaultApplicationJson3TypeEnum;
}
export declare enum CreateAnAccountTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAnAccountTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CreateAnAccountTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: CreateAnAccountTransferDefaultApplicationJson2TypeEnum;
}
export declare enum CreateAnAccountTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAnAccountTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CreateAnAccountTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CreateAnAccountTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: CreateAnAccountTransferDefaultApplicationJson1TypeEnum;
}
export declare class CreateAnAccountTransferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Account Transfer
     */
    accountTransfer?: shared.AccountTransfer;
    /**
     * Error
     */
    error?: any;
}
