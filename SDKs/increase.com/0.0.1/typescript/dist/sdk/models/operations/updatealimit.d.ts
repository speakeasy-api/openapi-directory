import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateALimitRequest extends SpeakeasyBase {
    limitId: string;
    updateALimitParameters: shared.UpdateALimitParameters;
}
export declare enum UpdateALimitDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum UpdateALimitDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class UpdateALimitDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: UpdateALimitDefaultApplicationJson13StatusEnum;
    title: string;
    type: UpdateALimitDefaultApplicationJson13TypeEnum;
}
export declare enum UpdateALimitDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum UpdateALimitDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class UpdateALimitDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: UpdateALimitDefaultApplicationJson12StatusEnum;
    title: string;
    type: UpdateALimitDefaultApplicationJson12TypeEnum;
}
export declare enum UpdateALimitDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum UpdateALimitDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class UpdateALimitDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: UpdateALimitDefaultApplicationJson11StatusEnum;
    title: string;
    type: UpdateALimitDefaultApplicationJson11TypeEnum;
}
export declare enum UpdateALimitDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum UpdateALimitDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class UpdateALimitDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: UpdateALimitDefaultApplicationJson10StatusEnum;
    title: string;
    type: UpdateALimitDefaultApplicationJson10TypeEnum;
}
export declare enum UpdateALimitDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum UpdateALimitDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class UpdateALimitDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: UpdateALimitDefaultApplicationJson9StatusEnum;
    title: string;
    type: UpdateALimitDefaultApplicationJson9TypeEnum;
}
export declare enum UpdateALimitDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum UpdateALimitDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class UpdateALimitDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: UpdateALimitDefaultApplicationJson8StatusEnum;
    title: string;
    type: UpdateALimitDefaultApplicationJson8TypeEnum;
}
export declare enum UpdateALimitDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum UpdateALimitDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class UpdateALimitDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: UpdateALimitDefaultApplicationJson7StatusEnum;
    title: string;
    type: UpdateALimitDefaultApplicationJson7TypeEnum;
}
export declare enum UpdateALimitDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum UpdateALimitDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class UpdateALimitDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: UpdateALimitDefaultApplicationJson6StatusEnum;
    title: string;
    type: UpdateALimitDefaultApplicationJson6TypeEnum;
}
export declare enum UpdateALimitDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum UpdateALimitDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class UpdateALimitDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: UpdateALimitDefaultApplicationJson5StatusEnum;
    title: string;
    type: UpdateALimitDefaultApplicationJson5TypeEnum;
}
export declare enum UpdateALimitDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum UpdateALimitDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class UpdateALimitDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: UpdateALimitDefaultApplicationJson4StatusEnum;
    title: string;
    type: UpdateALimitDefaultApplicationJson4TypeEnum;
}
export declare enum UpdateALimitDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum UpdateALimitDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class UpdateALimitDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: UpdateALimitDefaultApplicationJson3StatusEnum;
    title: string;
    type: UpdateALimitDefaultApplicationJson3TypeEnum;
}
export declare enum UpdateALimitDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum UpdateALimitDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class UpdateALimitDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: UpdateALimitDefaultApplicationJson2StatusEnum;
    title: string;
    type: UpdateALimitDefaultApplicationJson2TypeEnum;
}
export declare enum UpdateALimitDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum UpdateALimitDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class UpdateALimitDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: UpdateALimitDefaultApplicationJson1StatusEnum;
    title: string;
    type: UpdateALimitDefaultApplicationJson1TypeEnum;
}
export declare class UpdateALimitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Limit
     */
    limit?: shared.Limit;
}
