import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson13StatusEnum {
    FourHundredAndTwentyNine = "429"
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson13TypeEnum {
    RateLimitedError = "rate_limited_error"
}
export declare class SimulateDigitalWalletProvisioningForACardDefaultApplicationJson13 extends SpeakeasyBase {
    detail: string;
    retryAfter?: number;
    status: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson13StatusEnum;
    title: string;
    type: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson13TypeEnum;
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson12StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson12TypeEnum {
    PrivateFeatureError = "private_feature_error"
}
export declare class SimulateDigitalWalletProvisioningForACardDefaultApplicationJson12 extends SpeakeasyBase {
    detail: string;
    status: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson12StatusEnum;
    title: string;
    type: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson12TypeEnum;
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson11StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson11TypeEnum {
    ObjectNotFoundError = "object_not_found_error"
}
export declare class SimulateDigitalWalletProvisioningForACardDefaultApplicationJson11 extends SpeakeasyBase {
    detail: string;
    status: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson11StatusEnum;
    title: string;
    type: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson11TypeEnum;
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson10StatusEnum {
    FourHundred = "400"
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson10TypeEnum {
    MalformedRequestError = "malformed_request_error"
}
export declare class SimulateDigitalWalletProvisioningForACardDefaultApplicationJson10 extends SpeakeasyBase {
    detail: string;
    status: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson10StatusEnum;
    title: string;
    type: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson10TypeEnum;
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson9StatusEnum {
    FourHundred = "400"
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson9TypeEnum {
    InvalidParametersError = "invalid_parameters_error"
}
export declare class SimulateDigitalWalletProvisioningForACardDefaultApplicationJson9 extends SpeakeasyBase {
    detail: string;
    /**
     * All errors related to parsing the request parameters.
     */
    errors?: Record<string, any>[];
    status: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson9StatusEnum;
    title: string;
    type: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson9TypeEnum;
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson8StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson8TypeEnum {
    InvalidOperationError = "invalid_operation_error"
}
export declare class SimulateDigitalWalletProvisioningForACardDefaultApplicationJson8 extends SpeakeasyBase {
    detail: string;
    status: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson8StatusEnum;
    title: string;
    type: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson8TypeEnum;
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson7StatusEnum {
    FourHundredAndOne = "401"
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson7TypeEnum {
    InvalidApiKeyError = "invalid_api_key_error"
}
export declare class SimulateDigitalWalletProvisioningForACardDefaultApplicationJson7 extends SpeakeasyBase {
    detail: string;
    status: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson7StatusEnum;
    title: string;
    type: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson7TypeEnum;
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson6StatusEnum {
    FiveHundred = "500"
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson6TypeEnum {
    InternalServerError = "internal_server_error"
}
export declare class SimulateDigitalWalletProvisioningForACardDefaultApplicationJson6 extends SpeakeasyBase {
    detail: string;
    status: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson6StatusEnum;
    title: string;
    type: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson6TypeEnum;
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson5StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson5TypeEnum {
    InsufficientPermissionsError = "insufficient_permissions_error"
}
export declare class SimulateDigitalWalletProvisioningForACardDefaultApplicationJson5 extends SpeakeasyBase {
    detail: string;
    status: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson5StatusEnum;
    title: string;
    type: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson5TypeEnum;
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson4StatusEnum {
    FourHundredAndTwentyTwo = "422"
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson4TypeEnum {
    IdempotencyUnprocessableError = "idempotency_unprocessable_error"
}
export declare class SimulateDigitalWalletProvisioningForACardDefaultApplicationJson4 extends SpeakeasyBase {
    detail: string;
    status: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson4StatusEnum;
    title: string;
    type: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson4TypeEnum;
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson3StatusEnum {
    FourHundredAndNine = "409"
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson3TypeEnum {
    IdempotencyConflictError = "idempotency_conflict_error"
}
export declare class SimulateDigitalWalletProvisioningForACardDefaultApplicationJson3 extends SpeakeasyBase {
    detail: string;
    status: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson3StatusEnum;
    title: string;
    type: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson3TypeEnum;
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson2StatusEnum {
    FourHundredAndThree = "403"
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson2TypeEnum {
    EnvironmentMismatchError = "environment_mismatch_error"
}
export declare class SimulateDigitalWalletProvisioningForACardDefaultApplicationJson2 extends SpeakeasyBase {
    detail: string;
    status: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson2StatusEnum;
    title: string;
    type: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson2TypeEnum;
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson1StatusEnum {
    FourHundredAndFour = "404"
}
export declare enum SimulateDigitalWalletProvisioningForACardDefaultApplicationJson1TypeEnum {
    ApiMethodNotFoundError = "api_method_not_found_error"
}
export declare class SimulateDigitalWalletProvisioningForACardDefaultApplicationJson1 extends SpeakeasyBase {
    detail: string;
    status: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson1StatusEnum;
    title: string;
    type: SimulateDigitalWalletProvisioningForACardDefaultApplicationJson1TypeEnum;
}
export declare class SimulateDigitalWalletProvisioningForACardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    error?: any;
    /**
     * Inbound Digital Wallet Token Request Simulation Result
     */
    inboundDigitalWalletTokenRequestSimulationResult?: shared.InboundDigitalWalletTokenRequestSimulationResult;
}
