import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SubmitASandboxWireTransferRequest extends SpeakeasyBase {
    wireTransferId: string;
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class SubmitASandboxWireTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: SubmitASandboxWireTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: SubmitASandboxWireTransferDefaultApplicationJson13TypeEnum;
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class SubmitASandboxWireTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxWireTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: SubmitASandboxWireTransferDefaultApplicationJson12TypeEnum;
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class SubmitASandboxWireTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxWireTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: SubmitASandboxWireTransferDefaultApplicationJson11TypeEnum;
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class SubmitASandboxWireTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxWireTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: SubmitASandboxWireTransferDefaultApplicationJson10TypeEnum;
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class SubmitASandboxWireTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: SubmitASandboxWireTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: SubmitASandboxWireTransferDefaultApplicationJson9TypeEnum;
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class SubmitASandboxWireTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxWireTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: SubmitASandboxWireTransferDefaultApplicationJson8TypeEnum;
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class SubmitASandboxWireTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxWireTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: SubmitASandboxWireTransferDefaultApplicationJson7TypeEnum;
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class SubmitASandboxWireTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxWireTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: SubmitASandboxWireTransferDefaultApplicationJson6TypeEnum;
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class SubmitASandboxWireTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxWireTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: SubmitASandboxWireTransferDefaultApplicationJson5TypeEnum;
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class SubmitASandboxWireTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxWireTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: SubmitASandboxWireTransferDefaultApplicationJson4TypeEnum;
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class SubmitASandboxWireTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxWireTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: SubmitASandboxWireTransferDefaultApplicationJson3TypeEnum;
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class SubmitASandboxWireTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxWireTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: SubmitASandboxWireTransferDefaultApplicationJson2TypeEnum;
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SubmitASandboxWireTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class SubmitASandboxWireTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: SubmitASandboxWireTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: SubmitASandboxWireTransferDefaultApplicationJson1TypeEnum;
}
export declare class SubmitASandboxWireTransferResponse extends SpeakeasyBase {
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
