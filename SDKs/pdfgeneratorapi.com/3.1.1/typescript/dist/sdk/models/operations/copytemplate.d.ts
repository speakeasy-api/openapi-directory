import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CopyTemplateRequest extends SpeakeasyBase {
    /**
     * Name for the copied template. If name is not specified then the original name is used.
     */
    name?: string;
    /**
     * Template unique identifier
     */
    templateId: number;
}
/**
 * Internal Server Error
 */
export declare class CopyTemplate500ApplicationJSON extends SpeakeasyBase {
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
export declare enum CopyTemplate422ApplicationJSONErrorEnum {
    UnableToParseJSONPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}
/**
 * Unprocessable Entity
 */
export declare class CopyTemplate422ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: CopyTemplate422ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum CopyTemplate404ApplicationJSONErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}
/**
 * Not Found
 */
export declare class CopyTemplate404ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: CopyTemplate404ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum CopyTemplate403ApplicationJSONErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}
/**
 * Forbidden
 */
export declare class CopyTemplate403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: CopyTemplate403ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum CopyTemplate401ApplicationJSONErrorEnum {
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
export declare class CopyTemplate401ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: CopyTemplate401ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Template configuration as JSON object
 */
export declare class CopyTemplate200ApplicationJSON extends SpeakeasyBase {
    response?: shared.TemplateDefinition;
}
export declare class CopyTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Template configuration as JSON object
     */
    copyTemplate200ApplicationJSONObject?: CopyTemplate200ApplicationJSON;
    /**
     * Unauthorized
     */
    copyTemplate401ApplicationJSONObject?: CopyTemplate401ApplicationJSON;
    /**
     * Forbidden
     */
    copyTemplate403ApplicationJSONObject?: CopyTemplate403ApplicationJSON;
    /**
     * Not Found
     */
    copyTemplate404ApplicationJSONObject?: CopyTemplate404ApplicationJSON;
    /**
     * Unprocessable Entity
     */
    copyTemplate422ApplicationJSONObject?: CopyTemplate422ApplicationJSON;
    /**
     * Internal Server Error
     */
    copyTemplate500ApplicationJSONObject?: CopyTemplate500ApplicationJSON;
}
