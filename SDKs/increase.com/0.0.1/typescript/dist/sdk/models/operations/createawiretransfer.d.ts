import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAWireTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CreateAWireTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CreateAWireTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CreateAWireTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: CreateAWireTransferDefaultApplicationJson13TypeEnum;
}
export declare enum CreateAWireTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAWireTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CreateAWireTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CreateAWireTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: CreateAWireTransferDefaultApplicationJson12TypeEnum;
}
export declare enum CreateAWireTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAWireTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CreateAWireTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CreateAWireTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: CreateAWireTransferDefaultApplicationJson11TypeEnum;
}
export declare enum CreateAWireTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAWireTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CreateAWireTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CreateAWireTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: CreateAWireTransferDefaultApplicationJson10TypeEnum;
}
export declare enum CreateAWireTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAWireTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CreateAWireTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CreateAWireTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: CreateAWireTransferDefaultApplicationJson9TypeEnum;
}
export declare enum CreateAWireTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAWireTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CreateAWireTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CreateAWireTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: CreateAWireTransferDefaultApplicationJson8TypeEnum;
}
export declare enum CreateAWireTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CreateAWireTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CreateAWireTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CreateAWireTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: CreateAWireTransferDefaultApplicationJson7TypeEnum;
}
export declare enum CreateAWireTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CreateAWireTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CreateAWireTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CreateAWireTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: CreateAWireTransferDefaultApplicationJson6TypeEnum;
}
export declare enum CreateAWireTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAWireTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CreateAWireTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CreateAWireTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: CreateAWireTransferDefaultApplicationJson5TypeEnum;
}
export declare enum CreateAWireTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CreateAWireTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CreateAWireTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CreateAWireTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: CreateAWireTransferDefaultApplicationJson4TypeEnum;
}
export declare enum CreateAWireTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAWireTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CreateAWireTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CreateAWireTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: CreateAWireTransferDefaultApplicationJson3TypeEnum;
}
export declare enum CreateAWireTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAWireTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CreateAWireTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CreateAWireTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: CreateAWireTransferDefaultApplicationJson2TypeEnum;
}
export declare enum CreateAWireTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAWireTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CreateAWireTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CreateAWireTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: CreateAWireTransferDefaultApplicationJson1TypeEnum;
}
export declare class CreateAWireTransferResponse extends SpeakeasyBase {
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
