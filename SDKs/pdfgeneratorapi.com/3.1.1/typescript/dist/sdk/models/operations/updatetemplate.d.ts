import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateTemplateRequest extends SpeakeasyBase {
    /**
     * Template configuration as JSON string
     */
    templateDefinitionNew: shared.TemplateDefinitionNew;
    /**
     * Template unique identifier
     */
    templateId: number;
}
/**
 * Internal Server Error
 */
export declare class UpdateTemplate500ApplicationJSON extends SpeakeasyBase {
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
export declare enum UpdateTemplate422ApplicationJSONErrorEnum {
    UnableToParseJSONPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}
/**
 * Unprocessable Entity
 */
export declare class UpdateTemplate422ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: UpdateTemplate422ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum UpdateTemplate404ApplicationJSONErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}
/**
 * Not Found
 */
export declare class UpdateTemplate404ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: UpdateTemplate404ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum UpdateTemplate403ApplicationJSONErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}
/**
 * Forbidden
 */
export declare class UpdateTemplate403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: UpdateTemplate403ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum UpdateTemplate401ApplicationJSONErrorEnum {
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
export declare class UpdateTemplate401ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: UpdateTemplate401ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Template configuration as JSON object
 */
export declare class UpdateTemplate200ApplicationJSON extends SpeakeasyBase {
    response?: shared.TemplateDefinition;
}
export declare class UpdateTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Template configuration as JSON object
     */
    updateTemplate200ApplicationJSONObject?: UpdateTemplate200ApplicationJSON;
    /**
     * Unauthorized
     */
    updateTemplate401ApplicationJSONObject?: UpdateTemplate401ApplicationJSON;
    /**
     * Forbidden
     */
    updateTemplate403ApplicationJSONObject?: UpdateTemplate403ApplicationJSON;
    /**
     * Not Found
     */
    updateTemplate404ApplicationJSONObject?: UpdateTemplate404ApplicationJSON;
    /**
     * Unprocessable Entity
     */
    updateTemplate422ApplicationJSONObject?: UpdateTemplate422ApplicationJSON;
    /**
     * Internal Server Error
     */
    updateTemplate500ApplicationJSONObject?: UpdateTemplate500ApplicationJSON;
}
