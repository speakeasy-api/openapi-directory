import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveAWireDrawdownRequestRequest extends SpeakeasyBase {
    wireDrawdownRequestId: string;
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class RetrieveAWireDrawdownRequestDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: RetrieveAWireDrawdownRequestDefaultApplicationJson13StatusEnum;
    title: string;
    type: RetrieveAWireDrawdownRequestDefaultApplicationJson13TypeEnum;
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class RetrieveAWireDrawdownRequestDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAWireDrawdownRequestDefaultApplicationJson12StatusEnum;
    title: string;
    type: RetrieveAWireDrawdownRequestDefaultApplicationJson12TypeEnum;
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class RetrieveAWireDrawdownRequestDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAWireDrawdownRequestDefaultApplicationJson11StatusEnum;
    title: string;
    type: RetrieveAWireDrawdownRequestDefaultApplicationJson11TypeEnum;
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class RetrieveAWireDrawdownRequestDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAWireDrawdownRequestDefaultApplicationJson10StatusEnum;
    title: string;
    type: RetrieveAWireDrawdownRequestDefaultApplicationJson10TypeEnum;
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class RetrieveAWireDrawdownRequestDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: RetrieveAWireDrawdownRequestDefaultApplicationJson9StatusEnum;
    title: string;
    type: RetrieveAWireDrawdownRequestDefaultApplicationJson9TypeEnum;
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class RetrieveAWireDrawdownRequestDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAWireDrawdownRequestDefaultApplicationJson8StatusEnum;
    title: string;
    type: RetrieveAWireDrawdownRequestDefaultApplicationJson8TypeEnum;
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class RetrieveAWireDrawdownRequestDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAWireDrawdownRequestDefaultApplicationJson7StatusEnum;
    title: string;
    type: RetrieveAWireDrawdownRequestDefaultApplicationJson7TypeEnum;
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class RetrieveAWireDrawdownRequestDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAWireDrawdownRequestDefaultApplicationJson6StatusEnum;
    title: string;
    type: RetrieveAWireDrawdownRequestDefaultApplicationJson6TypeEnum;
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class RetrieveAWireDrawdownRequestDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAWireDrawdownRequestDefaultApplicationJson5StatusEnum;
    title: string;
    type: RetrieveAWireDrawdownRequestDefaultApplicationJson5TypeEnum;
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class RetrieveAWireDrawdownRequestDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAWireDrawdownRequestDefaultApplicationJson4StatusEnum;
    title: string;
    type: RetrieveAWireDrawdownRequestDefaultApplicationJson4TypeEnum;
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class RetrieveAWireDrawdownRequestDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAWireDrawdownRequestDefaultApplicationJson3StatusEnum;
    title: string;
    type: RetrieveAWireDrawdownRequestDefaultApplicationJson3TypeEnum;
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class RetrieveAWireDrawdownRequestDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAWireDrawdownRequestDefaultApplicationJson2StatusEnum;
    title: string;
    type: RetrieveAWireDrawdownRequestDefaultApplicationJson2TypeEnum;
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum RetrieveAWireDrawdownRequestDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class RetrieveAWireDrawdownRequestDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: RetrieveAWireDrawdownRequestDefaultApplicationJson1StatusEnum;
    title: string;
    type: RetrieveAWireDrawdownRequestDefaultApplicationJson1TypeEnum;
}
export declare class RetrieveAWireDrawdownRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Wire Drawdown Request
     */
    wireDrawdownRequest?: shared.WireDrawdownRequest;
}
