import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListDocumentsCategoryInEnum {
    Form1099Int = "form_1099_int"
}
export declare class ListDocumentsRequest extends SpeakeasyBase {
    categoryIn?: ListDocumentsCategoryInEnum[];
    createdAtAfter?: Date;
    createdAtBefore?: Date;
    createdAtOnOrAfter?: Date;
    createdAtOnOrBefore?: Date;
    cursor?: string;
    entityId?: string;
    limit?: number;
}
export declare enum ListDocumentsDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListDocumentsDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListDocumentsDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListDocumentsDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListDocumentsDefaultApplicationJson13TypeEnum;
}
export declare enum ListDocumentsDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListDocumentsDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListDocumentsDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListDocumentsDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListDocumentsDefaultApplicationJson12TypeEnum;
}
export declare enum ListDocumentsDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListDocumentsDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListDocumentsDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListDocumentsDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListDocumentsDefaultApplicationJson11TypeEnum;
}
export declare enum ListDocumentsDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListDocumentsDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListDocumentsDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListDocumentsDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListDocumentsDefaultApplicationJson10TypeEnum;
}
export declare enum ListDocumentsDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListDocumentsDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListDocumentsDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListDocumentsDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListDocumentsDefaultApplicationJson9TypeEnum;
}
export declare enum ListDocumentsDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListDocumentsDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListDocumentsDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListDocumentsDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListDocumentsDefaultApplicationJson8TypeEnum;
}
export declare enum ListDocumentsDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListDocumentsDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListDocumentsDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListDocumentsDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListDocumentsDefaultApplicationJson7TypeEnum;
}
export declare enum ListDocumentsDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListDocumentsDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListDocumentsDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListDocumentsDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListDocumentsDefaultApplicationJson6TypeEnum;
}
export declare enum ListDocumentsDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListDocumentsDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListDocumentsDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListDocumentsDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListDocumentsDefaultApplicationJson5TypeEnum;
}
export declare enum ListDocumentsDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListDocumentsDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListDocumentsDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListDocumentsDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListDocumentsDefaultApplicationJson4TypeEnum;
}
export declare enum ListDocumentsDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListDocumentsDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListDocumentsDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListDocumentsDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListDocumentsDefaultApplicationJson3TypeEnum;
}
export declare enum ListDocumentsDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListDocumentsDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListDocumentsDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListDocumentsDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListDocumentsDefaultApplicationJson2TypeEnum;
}
export declare enum ListDocumentsDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListDocumentsDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListDocumentsDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListDocumentsDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListDocumentsDefaultApplicationJson1TypeEnum;
}
export declare class ListDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Document List
     */
    documentList?: shared.DocumentList;
    /**
     * Error
     */
    error?: any;
}
