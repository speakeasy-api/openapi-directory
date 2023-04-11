import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class CreateAWireDrawdownRequestDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: CreateAWireDrawdownRequestDefaultApplicationJson13StatusEnum;
    title: string;
    type: CreateAWireDrawdownRequestDefaultApplicationJson13TypeEnum;
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class CreateAWireDrawdownRequestDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: CreateAWireDrawdownRequestDefaultApplicationJson12StatusEnum;
    title: string;
    type: CreateAWireDrawdownRequestDefaultApplicationJson12TypeEnum;
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class CreateAWireDrawdownRequestDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: CreateAWireDrawdownRequestDefaultApplicationJson11StatusEnum;
    title: string;
    type: CreateAWireDrawdownRequestDefaultApplicationJson11TypeEnum;
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class CreateAWireDrawdownRequestDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: CreateAWireDrawdownRequestDefaultApplicationJson10StatusEnum;
    title: string;
    type: CreateAWireDrawdownRequestDefaultApplicationJson10TypeEnum;
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class CreateAWireDrawdownRequestDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: CreateAWireDrawdownRequestDefaultApplicationJson9StatusEnum;
    title: string;
    type: CreateAWireDrawdownRequestDefaultApplicationJson9TypeEnum;
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class CreateAWireDrawdownRequestDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: CreateAWireDrawdownRequestDefaultApplicationJson8StatusEnum;
    title: string;
    type: CreateAWireDrawdownRequestDefaultApplicationJson8TypeEnum;
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class CreateAWireDrawdownRequestDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: CreateAWireDrawdownRequestDefaultApplicationJson7StatusEnum;
    title: string;
    type: CreateAWireDrawdownRequestDefaultApplicationJson7TypeEnum;
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class CreateAWireDrawdownRequestDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: CreateAWireDrawdownRequestDefaultApplicationJson6StatusEnum;
    title: string;
    type: CreateAWireDrawdownRequestDefaultApplicationJson6TypeEnum;
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class CreateAWireDrawdownRequestDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: CreateAWireDrawdownRequestDefaultApplicationJson5StatusEnum;
    title: string;
    type: CreateAWireDrawdownRequestDefaultApplicationJson5TypeEnum;
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class CreateAWireDrawdownRequestDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: CreateAWireDrawdownRequestDefaultApplicationJson4StatusEnum;
    title: string;
    type: CreateAWireDrawdownRequestDefaultApplicationJson4TypeEnum;
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class CreateAWireDrawdownRequestDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: CreateAWireDrawdownRequestDefaultApplicationJson3StatusEnum;
    title: string;
    type: CreateAWireDrawdownRequestDefaultApplicationJson3TypeEnum;
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class CreateAWireDrawdownRequestDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: CreateAWireDrawdownRequestDefaultApplicationJson2StatusEnum;
    title: string;
    type: CreateAWireDrawdownRequestDefaultApplicationJson2TypeEnum;
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum CreateAWireDrawdownRequestDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class CreateAWireDrawdownRequestDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: CreateAWireDrawdownRequestDefaultApplicationJson1StatusEnum;
    title: string;
    type: CreateAWireDrawdownRequestDefaultApplicationJson1TypeEnum;
}
export declare class CreateAWireDrawdownRequestResponse extends SpeakeasyBase {
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
