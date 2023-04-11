import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReverseASandboxWireTransferRequest extends SpeakeasyBase {
    wireTransferId: string;
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ReverseASandboxWireTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ReverseASandboxWireTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: ReverseASandboxWireTransferDefaultApplicationJson13TypeEnum;
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ReverseASandboxWireTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ReverseASandboxWireTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: ReverseASandboxWireTransferDefaultApplicationJson12TypeEnum;
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ReverseASandboxWireTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ReverseASandboxWireTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: ReverseASandboxWireTransferDefaultApplicationJson11TypeEnum;
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ReverseASandboxWireTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ReverseASandboxWireTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: ReverseASandboxWireTransferDefaultApplicationJson10TypeEnum;
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ReverseASandboxWireTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ReverseASandboxWireTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: ReverseASandboxWireTransferDefaultApplicationJson9TypeEnum;
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ReverseASandboxWireTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ReverseASandboxWireTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: ReverseASandboxWireTransferDefaultApplicationJson8TypeEnum;
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ReverseASandboxWireTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ReverseASandboxWireTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: ReverseASandboxWireTransferDefaultApplicationJson7TypeEnum;
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ReverseASandboxWireTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ReverseASandboxWireTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: ReverseASandboxWireTransferDefaultApplicationJson6TypeEnum;
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ReverseASandboxWireTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ReverseASandboxWireTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: ReverseASandboxWireTransferDefaultApplicationJson5TypeEnum;
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ReverseASandboxWireTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ReverseASandboxWireTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: ReverseASandboxWireTransferDefaultApplicationJson4TypeEnum;
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ReverseASandboxWireTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ReverseASandboxWireTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: ReverseASandboxWireTransferDefaultApplicationJson3TypeEnum;
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ReverseASandboxWireTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ReverseASandboxWireTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: ReverseASandboxWireTransferDefaultApplicationJson2TypeEnum;
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ReverseASandboxWireTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ReverseASandboxWireTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ReverseASandboxWireTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: ReverseASandboxWireTransferDefaultApplicationJson1TypeEnum;
}
export declare class ReverseASandboxWireTransferResponse extends SpeakeasyBase {
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
