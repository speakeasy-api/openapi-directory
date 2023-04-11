import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class SimulateATaxDocumentBeingCreatedDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: SimulateATaxDocumentBeingCreatedDefaultApplicationJson13StatusEnum;
    title: string;
    type: SimulateATaxDocumentBeingCreatedDefaultApplicationJson13TypeEnum;
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class SimulateATaxDocumentBeingCreatedDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: SimulateATaxDocumentBeingCreatedDefaultApplicationJson12StatusEnum;
    title: string;
    type: SimulateATaxDocumentBeingCreatedDefaultApplicationJson12TypeEnum;
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class SimulateATaxDocumentBeingCreatedDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: SimulateATaxDocumentBeingCreatedDefaultApplicationJson11StatusEnum;
    title: string;
    type: SimulateATaxDocumentBeingCreatedDefaultApplicationJson11TypeEnum;
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class SimulateATaxDocumentBeingCreatedDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: SimulateATaxDocumentBeingCreatedDefaultApplicationJson10StatusEnum;
    title: string;
    type: SimulateATaxDocumentBeingCreatedDefaultApplicationJson10TypeEnum;
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class SimulateATaxDocumentBeingCreatedDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: SimulateATaxDocumentBeingCreatedDefaultApplicationJson9StatusEnum;
    title: string;
    type: SimulateATaxDocumentBeingCreatedDefaultApplicationJson9TypeEnum;
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class SimulateATaxDocumentBeingCreatedDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: SimulateATaxDocumentBeingCreatedDefaultApplicationJson8StatusEnum;
    title: string;
    type: SimulateATaxDocumentBeingCreatedDefaultApplicationJson8TypeEnum;
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class SimulateATaxDocumentBeingCreatedDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: SimulateATaxDocumentBeingCreatedDefaultApplicationJson7StatusEnum;
    title: string;
    type: SimulateATaxDocumentBeingCreatedDefaultApplicationJson7TypeEnum;
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class SimulateATaxDocumentBeingCreatedDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: SimulateATaxDocumentBeingCreatedDefaultApplicationJson6StatusEnum;
    title: string;
    type: SimulateATaxDocumentBeingCreatedDefaultApplicationJson6TypeEnum;
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class SimulateATaxDocumentBeingCreatedDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: SimulateATaxDocumentBeingCreatedDefaultApplicationJson5StatusEnum;
    title: string;
    type: SimulateATaxDocumentBeingCreatedDefaultApplicationJson5TypeEnum;
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class SimulateATaxDocumentBeingCreatedDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: SimulateATaxDocumentBeingCreatedDefaultApplicationJson4StatusEnum;
    title: string;
    type: SimulateATaxDocumentBeingCreatedDefaultApplicationJson4TypeEnum;
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class SimulateATaxDocumentBeingCreatedDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: SimulateATaxDocumentBeingCreatedDefaultApplicationJson3StatusEnum;
    title: string;
    type: SimulateATaxDocumentBeingCreatedDefaultApplicationJson3TypeEnum;
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class SimulateATaxDocumentBeingCreatedDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: SimulateATaxDocumentBeingCreatedDefaultApplicationJson2StatusEnum;
    title: string;
    type: SimulateATaxDocumentBeingCreatedDefaultApplicationJson2TypeEnum;
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SimulateATaxDocumentBeingCreatedDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class SimulateATaxDocumentBeingCreatedDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: SimulateATaxDocumentBeingCreatedDefaultApplicationJson1StatusEnum;
    title: string;
    type: SimulateATaxDocumentBeingCreatedDefaultApplicationJson1TypeEnum;
}
export declare class SimulateATaxDocumentBeingCreatedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Document
     */
    document?: shared.Document;
    /**
     * Error
     */
    error?: any;
}
