import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListWireTransfersRequest extends SpeakeasyBase {
    accountId?: string;
    createdAtAfter?: Date;
    createdAtBefore?: Date;
    createdAtOnOrAfter?: Date;
    createdAtOnOrBefore?: Date;
    cursor?: string;
    externalAccountId?: string;
    limit?: number;
}
export declare enum ListWireTransfersDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ListWireTransfersDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ListWireTransfersDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ListWireTransfersDefaultApplicationJson13StatusEnum;
    title: string;
    type: ListWireTransfersDefaultApplicationJson13TypeEnum;
}
export declare enum ListWireTransfersDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListWireTransfersDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ListWireTransfersDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ListWireTransfersDefaultApplicationJson12StatusEnum;
    title: string;
    type: ListWireTransfersDefaultApplicationJson12TypeEnum;
}
export declare enum ListWireTransfersDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListWireTransfersDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ListWireTransfersDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ListWireTransfersDefaultApplicationJson11StatusEnum;
    title: string;
    type: ListWireTransfersDefaultApplicationJson11TypeEnum;
}
export declare enum ListWireTransfersDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ListWireTransfersDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ListWireTransfersDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ListWireTransfersDefaultApplicationJson10StatusEnum;
    title: string;
    type: ListWireTransfersDefaultApplicationJson10TypeEnum;
}
export declare enum ListWireTransfersDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ListWireTransfersDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ListWireTransfersDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ListWireTransfersDefaultApplicationJson9StatusEnum;
    title: string;
    type: ListWireTransfersDefaultApplicationJson9TypeEnum;
}
export declare enum ListWireTransfersDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListWireTransfersDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ListWireTransfersDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ListWireTransfersDefaultApplicationJson8StatusEnum;
    title: string;
    type: ListWireTransfersDefaultApplicationJson8TypeEnum;
}
export declare enum ListWireTransfersDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ListWireTransfersDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ListWireTransfersDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ListWireTransfersDefaultApplicationJson7StatusEnum;
    title: string;
    type: ListWireTransfersDefaultApplicationJson7TypeEnum;
}
export declare enum ListWireTransfersDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ListWireTransfersDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ListWireTransfersDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ListWireTransfersDefaultApplicationJson6StatusEnum;
    title: string;
    type: ListWireTransfersDefaultApplicationJson6TypeEnum;
}
export declare enum ListWireTransfersDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListWireTransfersDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ListWireTransfersDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ListWireTransfersDefaultApplicationJson5StatusEnum;
    title: string;
    type: ListWireTransfersDefaultApplicationJson5TypeEnum;
}
export declare enum ListWireTransfersDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ListWireTransfersDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ListWireTransfersDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ListWireTransfersDefaultApplicationJson4StatusEnum;
    title: string;
    type: ListWireTransfersDefaultApplicationJson4TypeEnum;
}
export declare enum ListWireTransfersDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ListWireTransfersDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ListWireTransfersDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ListWireTransfersDefaultApplicationJson3StatusEnum;
    title: string;
    type: ListWireTransfersDefaultApplicationJson3TypeEnum;
}
export declare enum ListWireTransfersDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ListWireTransfersDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ListWireTransfersDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ListWireTransfersDefaultApplicationJson2StatusEnum;
    title: string;
    type: ListWireTransfersDefaultApplicationJson2TypeEnum;
}
export declare enum ListWireTransfersDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ListWireTransfersDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ListWireTransfersDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ListWireTransfersDefaultApplicationJson1StatusEnum;
    title: string;
    type: ListWireTransfersDefaultApplicationJson1TypeEnum;
}
export declare class ListWireTransfersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Wire Transfer List
     */
    wireTransferList?: shared.WireTransferList;
}
