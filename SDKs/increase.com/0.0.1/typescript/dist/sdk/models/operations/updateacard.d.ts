import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateACardRequest extends SpeakeasyBase {
    cardId: string;
    updateACardParameters: shared.UpdateACardParameters;
}
export declare enum UpdateACardDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum UpdateACardDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class UpdateACardDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: UpdateACardDefaultApplicationJson13StatusEnum;
    title: string;
    type: UpdateACardDefaultApplicationJson13TypeEnum;
}
export declare enum UpdateACardDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum UpdateACardDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class UpdateACardDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: UpdateACardDefaultApplicationJson12StatusEnum;
    title: string;
    type: UpdateACardDefaultApplicationJson12TypeEnum;
}
export declare enum UpdateACardDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum UpdateACardDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class UpdateACardDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: UpdateACardDefaultApplicationJson11StatusEnum;
    title: string;
    type: UpdateACardDefaultApplicationJson11TypeEnum;
}
export declare enum UpdateACardDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum UpdateACardDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class UpdateACardDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: UpdateACardDefaultApplicationJson10StatusEnum;
    title: string;
    type: UpdateACardDefaultApplicationJson10TypeEnum;
}
export declare enum UpdateACardDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum UpdateACardDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class UpdateACardDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: UpdateACardDefaultApplicationJson9StatusEnum;
    title: string;
    type: UpdateACardDefaultApplicationJson9TypeEnum;
}
export declare enum UpdateACardDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum UpdateACardDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class UpdateACardDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: UpdateACardDefaultApplicationJson8StatusEnum;
    title: string;
    type: UpdateACardDefaultApplicationJson8TypeEnum;
}
export declare enum UpdateACardDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum UpdateACardDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class UpdateACardDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: UpdateACardDefaultApplicationJson7StatusEnum;
    title: string;
    type: UpdateACardDefaultApplicationJson7TypeEnum;
}
export declare enum UpdateACardDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum UpdateACardDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class UpdateACardDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: UpdateACardDefaultApplicationJson6StatusEnum;
    title: string;
    type: UpdateACardDefaultApplicationJson6TypeEnum;
}
export declare enum UpdateACardDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum UpdateACardDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class UpdateACardDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: UpdateACardDefaultApplicationJson5StatusEnum;
    title: string;
    type: UpdateACardDefaultApplicationJson5TypeEnum;
}
export declare enum UpdateACardDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum UpdateACardDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class UpdateACardDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: UpdateACardDefaultApplicationJson4StatusEnum;
    title: string;
    type: UpdateACardDefaultApplicationJson4TypeEnum;
}
export declare enum UpdateACardDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum UpdateACardDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class UpdateACardDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: UpdateACardDefaultApplicationJson3StatusEnum;
    title: string;
    type: UpdateACardDefaultApplicationJson3TypeEnum;
}
export declare enum UpdateACardDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum UpdateACardDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class UpdateACardDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: UpdateACardDefaultApplicationJson2StatusEnum;
    title: string;
    type: UpdateACardDefaultApplicationJson2TypeEnum;
}
export declare enum UpdateACardDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum UpdateACardDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class UpdateACardDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: UpdateACardDefaultApplicationJson1StatusEnum;
    title: string;
    type: UpdateACardDefaultApplicationJson1TypeEnum;
}
export declare class UpdateACardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Card
     */
    card?: shared.Card;
    /**
     * Error
     */
    error?: any;
}
