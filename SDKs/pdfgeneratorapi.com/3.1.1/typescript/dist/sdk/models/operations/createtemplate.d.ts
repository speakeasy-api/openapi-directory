import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Internal Server Error
 */
export declare class CreateTemplate500ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: string;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum CreateTemplate422ApplicationJSONErrorEnum {
    UnableToParseJSONPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}
/**
 * Unprocessable Entity
 */
export declare class CreateTemplate422ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: CreateTemplate422ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum CreateTemplate404ApplicationJSONErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}
/**
 * Not Found
 */
export declare class CreateTemplate404ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: CreateTemplate404ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum CreateTemplate403ApplicationJSONErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}
/**
 * Forbidden
 */
export declare class CreateTemplate403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: CreateTemplate403ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum CreateTemplate401ApplicationJSONErrorEnum {
    AuthenticationFailedRequestExpired = "Authentication failed: request expired",
    AuthenticationFailedSignatureOrSecretMissing = "Authentication failed: signature or secret missing",
    AuthenticationFailedWorkspaceMissing = "Authentication failed: workspace missing",
    AuthenticationFailedKeyMissing = "Authentication failed: key missing",
    AuthenticationFailedPropertyIssIssuerMissingInJWT = "Authentication failed: property 'iss' (issuer) missing in JWT",
    AuthenticationFailedPropertySubSubjectMissingInJWT = "Authentication failed: property 'sub' (subject) missing in JWT",
    AuthenticationFailedPropertyExpExpirationTimeMissingInJWT = "Authentication failed: property 'exp' (expiration time) missing in JWT",
    AuthenticationFailedInvalidIssIssuer = "Authentication failed: invalid 'iss' (issuer)",
    AuthenticationFailedIncorrectSignature = "Authentication failed: incorrect signature",
    AuthenticationFailed = "Authentication failed"
}
/**
 * Unauthorized
 */
export declare class CreateTemplate401ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: CreateTemplate401ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Template configuration as JSON object
 */
export declare class CreateTemplate200ApplicationJSON extends SpeakeasyBase {
    response?: shared.TemplateDefinition;
}
export declare class CreateTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Template configuration as JSON object
     */
    createTemplate200ApplicationJSONObject?: CreateTemplate200ApplicationJSON;
    /**
     * Unauthorized
     */
    createTemplate401ApplicationJSONObject?: CreateTemplate401ApplicationJSON;
    /**
     * Forbidden
     */
    createTemplate403ApplicationJSONObject?: CreateTemplate403ApplicationJSON;
    /**
     * Not Found
     */
    createTemplate404ApplicationJSONObject?: CreateTemplate404ApplicationJSON;
    /**
     * Unprocessable Entity
     */
    createTemplate422ApplicationJSONObject?: CreateTemplate422ApplicationJSON;
    /**
     * Internal Server Error
     */
    createTemplate500ApplicationJSONObject?: CreateTemplate500ApplicationJSON;
}
