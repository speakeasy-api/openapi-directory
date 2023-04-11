import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveADocumentRequest extends SpeakeasyBase {
    documentId: string;
}
export declare enum RetrieveADocumentDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveADocumentDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveADocumentDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveADocumentDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveADocumentDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveADocumentDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveADocumentDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveADocumentDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADocumentDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveADocumentDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveADocumentDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveADocumentDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveADocumentDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADocumentDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveADocumentDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveADocumentDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveADocumentDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveADocumentDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADocumentDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveADocumentDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveADocumentDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveADocumentDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveADocumentDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveADocumentDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveADocumentDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveADocumentDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveADocumentDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveADocumentDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADocumentDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveADocumentDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveADocumentDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveADocumentDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveADocumentDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADocumentDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveADocumentDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveADocumentDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveADocumentDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveADocumentDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADocumentDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveADocumentDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveADocumentDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveADocumentDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveADocumentDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADocumentDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveADocumentDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveADocumentDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveADocumentDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveADocumentDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADocumentDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveADocumentDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveADocumentDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveADocumentDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveADocumentDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADocumentDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveADocumentDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveADocumentDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveADocumentDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveADocumentDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADocumentDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveADocumentDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveADocumentDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveADocumentDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveADocumentDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveADocumentDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveADocumentDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveADocumentResponse extends SpeakeasyBase {
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
