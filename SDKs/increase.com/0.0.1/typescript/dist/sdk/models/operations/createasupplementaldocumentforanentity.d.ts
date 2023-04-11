import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateASupplementalDocumentForAnEntityRequest extends SpeakeasyBase {
    createASupplementalDocumentForAnEntityParameters: shared.CreateASupplementalDocumentForAnEntityParameters;
    entityId: string;
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CreateASupplementalDocumentForAnEntityDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CreateASupplementalDocumentForAnEntityDefaultApplicationJson13StatusEnum;
    title: string;
    type: CreateASupplementalDocumentForAnEntityDefaultApplicationJson13TypeEnum;
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CreateASupplementalDocumentForAnEntityDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CreateASupplementalDocumentForAnEntityDefaultApplicationJson12StatusEnum;
    title: string;
    type: CreateASupplementalDocumentForAnEntityDefaultApplicationJson12TypeEnum;
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CreateASupplementalDocumentForAnEntityDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CreateASupplementalDocumentForAnEntityDefaultApplicationJson11StatusEnum;
    title: string;
    type: CreateASupplementalDocumentForAnEntityDefaultApplicationJson11TypeEnum;
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CreateASupplementalDocumentForAnEntityDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CreateASupplementalDocumentForAnEntityDefaultApplicationJson10StatusEnum;
    title: string;
    type: CreateASupplementalDocumentForAnEntityDefaultApplicationJson10TypeEnum;
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CreateASupplementalDocumentForAnEntityDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CreateASupplementalDocumentForAnEntityDefaultApplicationJson9StatusEnum;
    title: string;
    type: CreateASupplementalDocumentForAnEntityDefaultApplicationJson9TypeEnum;
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CreateASupplementalDocumentForAnEntityDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CreateASupplementalDocumentForAnEntityDefaultApplicationJson8StatusEnum;
    title: string;
    type: CreateASupplementalDocumentForAnEntityDefaultApplicationJson8TypeEnum;
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CreateASupplementalDocumentForAnEntityDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CreateASupplementalDocumentForAnEntityDefaultApplicationJson7StatusEnum;
    title: string;
    type: CreateASupplementalDocumentForAnEntityDefaultApplicationJson7TypeEnum;
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CreateASupplementalDocumentForAnEntityDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CreateASupplementalDocumentForAnEntityDefaultApplicationJson6StatusEnum;
    title: string;
    type: CreateASupplementalDocumentForAnEntityDefaultApplicationJson6TypeEnum;
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CreateASupplementalDocumentForAnEntityDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CreateASupplementalDocumentForAnEntityDefaultApplicationJson5StatusEnum;
    title: string;
    type: CreateASupplementalDocumentForAnEntityDefaultApplicationJson5TypeEnum;
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CreateASupplementalDocumentForAnEntityDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CreateASupplementalDocumentForAnEntityDefaultApplicationJson4StatusEnum;
    title: string;
    type: CreateASupplementalDocumentForAnEntityDefaultApplicationJson4TypeEnum;
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CreateASupplementalDocumentForAnEntityDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CreateASupplementalDocumentForAnEntityDefaultApplicationJson3StatusEnum;
    title: string;
    type: CreateASupplementalDocumentForAnEntityDefaultApplicationJson3TypeEnum;
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CreateASupplementalDocumentForAnEntityDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CreateASupplementalDocumentForAnEntityDefaultApplicationJson2StatusEnum;
    title: string;
    type: CreateASupplementalDocumentForAnEntityDefaultApplicationJson2TypeEnum;
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateASupplementalDocumentForAnEntityDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CreateASupplementalDocumentForAnEntityDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CreateASupplementalDocumentForAnEntityDefaultApplicationJson1StatusEnum;
    title: string;
    type: CreateASupplementalDocumentForAnEntityDefaultApplicationJson1TypeEnum;
}
export declare class CreateASupplementalDocumentForAnEntityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Entity
     */
    entity?: shared.Entity;
    /**
     * Error
     */
    error?: any;
}
