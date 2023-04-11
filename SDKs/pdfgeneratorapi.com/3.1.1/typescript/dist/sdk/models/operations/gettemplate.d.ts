import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTemplateRequest extends SpeakeasyBase {
    /**
     * Template unique identifier
     */
    templateId: number;
}
/**
 * Internal Server Error
 */
export declare class GetTemplate500ApplicationJSON extends SpeakeasyBase {
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
export declare enum GetTemplate422ApplicationJSONErrorEnum {
    UnableToParseJSONPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}
/**
 * Unprocessable Entity
 */
export declare class GetTemplate422ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: GetTemplate422ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum GetTemplate404ApplicationJSONErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}
/**
 * Not Found
 */
export declare class GetTemplate404ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: GetTemplate404ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum GetTemplate403ApplicationJSONErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}
/**
 * Forbidden
 */
export declare class GetTemplate403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: GetTemplate403ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum GetTemplate401ApplicationJSONErrorEnum {
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
export declare class GetTemplate401ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: GetTemplate401ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Template configuration as JSON object
 */
export declare class GetTemplate200ApplicationJSON extends SpeakeasyBase {
    response?: shared.TemplateDefinition;
}
export declare class GetTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Template configuration as JSON object
     */
    getTemplate200ApplicationJSONObject?: GetTemplate200ApplicationJSON;
    /**
     * Unauthorized
     */
    getTemplate401ApplicationJSONObject?: GetTemplate401ApplicationJSON;
    /**
     * Forbidden
     */
    getTemplate403ApplicationJSONObject?: GetTemplate403ApplicationJSON;
    /**
     * Not Found
     */
    getTemplate404ApplicationJSONObject?: GetTemplate404ApplicationJSON;
    /**
     * Unprocessable Entity
     */
    getTemplate422ApplicationJSONObject?: GetTemplate422ApplicationJSON;
    /**
     * Internal Server Error
     */
    getTemplate500ApplicationJSONObject?: GetTemplate500ApplicationJSON;
}
