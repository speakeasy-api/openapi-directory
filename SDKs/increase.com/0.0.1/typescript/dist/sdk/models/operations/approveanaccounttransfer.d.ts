import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApproveAnAccountTransferRequest extends SpeakeasyBase {
    accountTransferId: string;
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class ApproveAnAccountTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: ApproveAnAccountTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: ApproveAnAccountTransferDefaultApplicationJson13TypeEnum;
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class ApproveAnAccountTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: ApproveAnAccountTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: ApproveAnAccountTransferDefaultApplicationJson12TypeEnum;
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class ApproveAnAccountTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: ApproveAnAccountTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: ApproveAnAccountTransferDefaultApplicationJson11TypeEnum;
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class ApproveAnAccountTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: ApproveAnAccountTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: ApproveAnAccountTransferDefaultApplicationJson10TypeEnum;
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class ApproveAnAccountTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: ApproveAnAccountTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: ApproveAnAccountTransferDefaultApplicationJson9TypeEnum;
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class ApproveAnAccountTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: ApproveAnAccountTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: ApproveAnAccountTransferDefaultApplicationJson8TypeEnum;
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class ApproveAnAccountTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: ApproveAnAccountTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: ApproveAnAccountTransferDefaultApplicationJson7TypeEnum;
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class ApproveAnAccountTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: ApproveAnAccountTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: ApproveAnAccountTransferDefaultApplicationJson6TypeEnum;
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class ApproveAnAccountTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: ApproveAnAccountTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: ApproveAnAccountTransferDefaultApplicationJson5TypeEnum;
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class ApproveAnAccountTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: ApproveAnAccountTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: ApproveAnAccountTransferDefaultApplicationJson4TypeEnum;
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class ApproveAnAccountTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: ApproveAnAccountTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: ApproveAnAccountTransferDefaultApplicationJson3TypeEnum;
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class ApproveAnAccountTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: ApproveAnAccountTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: ApproveAnAccountTransferDefaultApplicationJson2TypeEnum;
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum ApproveAnAccountTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class ApproveAnAccountTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: ApproveAnAccountTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: ApproveAnAccountTransferDefaultApplicationJson1TypeEnum;
}
export declare class ApproveAnAccountTransferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Account Transfer
     */
    accountTransfer?: shared.AccountTransfer;
    /**
     * Error
     */
    error?: any;
}
