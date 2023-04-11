import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class SimulateAnAccountStatementBeingCreatedDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson13StatusEnum;
    title: string;
    type: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson13TypeEnum;
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class SimulateAnAccountStatementBeingCreatedDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson12StatusEnum;
    title: string;
    type: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson12TypeEnum;
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class SimulateAnAccountStatementBeingCreatedDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson11StatusEnum;
    title: string;
    type: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson11TypeEnum;
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class SimulateAnAccountStatementBeingCreatedDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson10StatusEnum;
    title: string;
    type: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson10TypeEnum;
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class SimulateAnAccountStatementBeingCreatedDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson9StatusEnum;
    title: string;
    type: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson9TypeEnum;
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class SimulateAnAccountStatementBeingCreatedDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson8StatusEnum;
    title: string;
    type: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson8TypeEnum;
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class SimulateAnAccountStatementBeingCreatedDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson7StatusEnum;
    title: string;
    type: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson7TypeEnum;
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class SimulateAnAccountStatementBeingCreatedDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson6StatusEnum;
    title: string;
    type: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson6TypeEnum;
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class SimulateAnAccountStatementBeingCreatedDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson5StatusEnum;
    title: string;
    type: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson5TypeEnum;
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class SimulateAnAccountStatementBeingCreatedDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson4StatusEnum;
    title: string;
    type: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson4TypeEnum;
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class SimulateAnAccountStatementBeingCreatedDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson3StatusEnum;
    title: string;
    type: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson3TypeEnum;
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class SimulateAnAccountStatementBeingCreatedDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson2StatusEnum;
    title: string;
    type: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson2TypeEnum;
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SimulateAnAccountStatementBeingCreatedDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class SimulateAnAccountStatementBeingCreatedDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson1StatusEnum;
    title: string;
    type: SimulateAnAccountStatementBeingCreatedDefaultApplicationJson1TypeEnum;
}
export declare class SimulateAnAccountStatementBeingCreatedResponse extends SpeakeasyBase {
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
