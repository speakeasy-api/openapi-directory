import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAWireTransferRequest extends SpeakeasyBase {
    wireTransferId: string;
}
export declare enum RetrieveAWireTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveAWireTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveAWireTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveAWireTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveAWireTransferDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveAWireTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAWireTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveAWireTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAWireTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveAWireTransferDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveAWireTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAWireTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveAWireTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAWireTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveAWireTransferDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveAWireTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAWireTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveAWireTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAWireTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveAWireTransferDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveAWireTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAWireTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveAWireTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveAWireTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveAWireTransferDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveAWireTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAWireTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveAWireTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAWireTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveAWireTransferDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveAWireTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveAWireTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveAWireTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAWireTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveAWireTransferDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveAWireTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveAWireTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveAWireTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAWireTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveAWireTransferDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveAWireTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAWireTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveAWireTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAWireTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveAWireTransferDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveAWireTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveAWireTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveAWireTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAWireTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveAWireTransferDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveAWireTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAWireTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveAWireTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAWireTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveAWireTransferDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveAWireTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAWireTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveAWireTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAWireTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveAWireTransferDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveAWireTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAWireTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveAWireTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAWireTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveAWireTransferDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveAWireTransferResponse extends SpeakeasyBase {
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
