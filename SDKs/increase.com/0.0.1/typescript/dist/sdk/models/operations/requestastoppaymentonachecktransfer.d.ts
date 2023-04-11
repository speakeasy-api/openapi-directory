import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestAStopPaymentOnACheckTransferRequest extends SpeakeasyBase {
    checkTransferId: string;
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RequestAStopPaymentOnACheckTransferDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RequestAStopPaymentOnACheckTransferDefaultApplicationJson13StatusEnum;
    title: string;
    type: RequestAStopPaymentOnACheckTransferDefaultApplicationJson13TypeEnum;
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RequestAStopPaymentOnACheckTransferDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RequestAStopPaymentOnACheckTransferDefaultApplicationJson12StatusEnum;
    title: string;
    type: RequestAStopPaymentOnACheckTransferDefaultApplicationJson12TypeEnum;
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RequestAStopPaymentOnACheckTransferDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RequestAStopPaymentOnACheckTransferDefaultApplicationJson11StatusEnum;
    title: string;
    type: RequestAStopPaymentOnACheckTransferDefaultApplicationJson11TypeEnum;
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RequestAStopPaymentOnACheckTransferDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RequestAStopPaymentOnACheckTransferDefaultApplicationJson10StatusEnum;
    title: string;
    type: RequestAStopPaymentOnACheckTransferDefaultApplicationJson10TypeEnum;
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RequestAStopPaymentOnACheckTransferDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RequestAStopPaymentOnACheckTransferDefaultApplicationJson9StatusEnum;
    title: string;
    type: RequestAStopPaymentOnACheckTransferDefaultApplicationJson9TypeEnum;
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RequestAStopPaymentOnACheckTransferDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RequestAStopPaymentOnACheckTransferDefaultApplicationJson8StatusEnum;
    title: string;
    type: RequestAStopPaymentOnACheckTransferDefaultApplicationJson8TypeEnum;
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RequestAStopPaymentOnACheckTransferDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RequestAStopPaymentOnACheckTransferDefaultApplicationJson7StatusEnum;
    title: string;
    type: RequestAStopPaymentOnACheckTransferDefaultApplicationJson7TypeEnum;
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RequestAStopPaymentOnACheckTransferDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RequestAStopPaymentOnACheckTransferDefaultApplicationJson6StatusEnum;
    title: string;
    type: RequestAStopPaymentOnACheckTransferDefaultApplicationJson6TypeEnum;
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RequestAStopPaymentOnACheckTransferDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RequestAStopPaymentOnACheckTransferDefaultApplicationJson5StatusEnum;
    title: string;
    type: RequestAStopPaymentOnACheckTransferDefaultApplicationJson5TypeEnum;
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RequestAStopPaymentOnACheckTransferDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RequestAStopPaymentOnACheckTransferDefaultApplicationJson4StatusEnum;
    title: string;
    type: RequestAStopPaymentOnACheckTransferDefaultApplicationJson4TypeEnum;
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RequestAStopPaymentOnACheckTransferDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RequestAStopPaymentOnACheckTransferDefaultApplicationJson3StatusEnum;
    title: string;
    type: RequestAStopPaymentOnACheckTransferDefaultApplicationJson3TypeEnum;
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RequestAStopPaymentOnACheckTransferDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RequestAStopPaymentOnACheckTransferDefaultApplicationJson2StatusEnum;
    title: string;
    type: RequestAStopPaymentOnACheckTransferDefaultApplicationJson2TypeEnum;
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RequestAStopPaymentOnACheckTransferDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RequestAStopPaymentOnACheckTransferDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RequestAStopPaymentOnACheckTransferDefaultApplicationJson1StatusEnum;
    title: string;
    type: RequestAStopPaymentOnACheckTransferDefaultApplicationJson1TypeEnum;
}
export declare class RequestAStopPaymentOnACheckTransferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Check Transfer
     */
    checkTransfer?: shared.CheckTransfer;
    /**
     * Error
     */
    error?: any;
}
