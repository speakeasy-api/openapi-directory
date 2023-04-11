import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAnAccountStatementRequest extends SpeakeasyBase {
    accountStatementId: string;
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveAnAccountStatementDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveAnAccountStatementDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveAnAccountStatementDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveAnAccountStatementDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountStatementDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveAnAccountStatementDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveAnAccountStatementDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountStatementDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveAnAccountStatementDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveAnAccountStatementDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountStatementDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveAnAccountStatementDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveAnAccountStatementDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveAnAccountStatementDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveAnAccountStatementDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveAnAccountStatementDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountStatementDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveAnAccountStatementDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveAnAccountStatementDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountStatementDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveAnAccountStatementDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveAnAccountStatementDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountStatementDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveAnAccountStatementDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveAnAccountStatementDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountStatementDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveAnAccountStatementDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveAnAccountStatementDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountStatementDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveAnAccountStatementDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveAnAccountStatementDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountStatementDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveAnAccountStatementDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveAnAccountStatementDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountStatementDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveAnAccountStatementDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAnAccountStatementDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveAnAccountStatementDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAnAccountStatementDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveAnAccountStatementDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveAnAccountStatementResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Account Statement
     */
    accountStatement?: shared.AccountStatement;
    /**
     * Error
     */
    error?: any;
}
