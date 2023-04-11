import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApproveAWireTransferRequest extends SpeakeasyBase {
    wireTransferId: string;
}
export declare enum ApproveAWireTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ApproveAWireTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ApproveAWireTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ApproveAWireTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: ApproveAWireTransferDefaultApplicationJson13TypeEnum;
}
export declare enum ApproveAWireTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ApproveAWireTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ApproveAWireTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ApproveAWireTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: ApproveAWireTransferDefaultApplicationJson12TypeEnum;
}
export declare enum ApproveAWireTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ApproveAWireTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ApproveAWireTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ApproveAWireTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: ApproveAWireTransferDefaultApplicationJson11TypeEnum;
}
export declare enum ApproveAWireTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ApproveAWireTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ApproveAWireTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ApproveAWireTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: ApproveAWireTransferDefaultApplicationJson10TypeEnum;
}
export declare enum ApproveAWireTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ApproveAWireTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ApproveAWireTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ApproveAWireTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: ApproveAWireTransferDefaultApplicationJson9TypeEnum;
}
export declare enum ApproveAWireTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ApproveAWireTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ApproveAWireTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ApproveAWireTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: ApproveAWireTransferDefaultApplicationJson8TypeEnum;
}
export declare enum ApproveAWireTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ApproveAWireTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ApproveAWireTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ApproveAWireTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: ApproveAWireTransferDefaultApplicationJson7TypeEnum;
}
export declare enum ApproveAWireTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ApproveAWireTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ApproveAWireTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ApproveAWireTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: ApproveAWireTransferDefaultApplicationJson6TypeEnum;
}
export declare enum ApproveAWireTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ApproveAWireTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ApproveAWireTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ApproveAWireTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: ApproveAWireTransferDefaultApplicationJson5TypeEnum;
}
export declare enum ApproveAWireTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ApproveAWireTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ApproveAWireTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ApproveAWireTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: ApproveAWireTransferDefaultApplicationJson4TypeEnum;
}
export declare enum ApproveAWireTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ApproveAWireTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ApproveAWireTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ApproveAWireTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: ApproveAWireTransferDefaultApplicationJson3TypeEnum;
}
export declare enum ApproveAWireTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ApproveAWireTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ApproveAWireTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ApproveAWireTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: ApproveAWireTransferDefaultApplicationJson2TypeEnum;
}
export declare enum ApproveAWireTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ApproveAWireTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ApproveAWireTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ApproveAWireTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: ApproveAWireTransferDefaultApplicationJson1TypeEnum;
}
export declare class ApproveAWireTransferResponse extends SpeakeasyBase {
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
