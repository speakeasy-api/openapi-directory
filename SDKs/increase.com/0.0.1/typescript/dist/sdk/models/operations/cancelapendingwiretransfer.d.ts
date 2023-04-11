import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CancelAPendingWireTransferRequest extends SpeakeasyBase {
    wireTransferId: string;
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CancelAPendingWireTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CancelAPendingWireTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: CancelAPendingWireTransferDefaultApplicationJson13TypeEnum;
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CancelAPendingWireTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingWireTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: CancelAPendingWireTransferDefaultApplicationJson12TypeEnum;
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CancelAPendingWireTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingWireTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: CancelAPendingWireTransferDefaultApplicationJson11TypeEnum;
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CancelAPendingWireTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingWireTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: CancelAPendingWireTransferDefaultApplicationJson10TypeEnum;
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CancelAPendingWireTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CancelAPendingWireTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: CancelAPendingWireTransferDefaultApplicationJson9TypeEnum;
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CancelAPendingWireTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingWireTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: CancelAPendingWireTransferDefaultApplicationJson8TypeEnum;
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CancelAPendingWireTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingWireTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: CancelAPendingWireTransferDefaultApplicationJson7TypeEnum;
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CancelAPendingWireTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingWireTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: CancelAPendingWireTransferDefaultApplicationJson6TypeEnum;
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CancelAPendingWireTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingWireTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: CancelAPendingWireTransferDefaultApplicationJson5TypeEnum;
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CancelAPendingWireTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingWireTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: CancelAPendingWireTransferDefaultApplicationJson4TypeEnum;
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CancelAPendingWireTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingWireTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: CancelAPendingWireTransferDefaultApplicationJson3TypeEnum;
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CancelAPendingWireTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingWireTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: CancelAPendingWireTransferDefaultApplicationJson2TypeEnum;
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CancelAPendingWireTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CancelAPendingWireTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CancelAPendingWireTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: CancelAPendingWireTransferDefaultApplicationJson1TypeEnum;
}
export declare class CancelAPendingWireTransferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Wire Transfer
     */
    wireTransfer?: shared.WireTransfer;
}
