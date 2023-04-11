import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Internal Server Error
 */
export declare class GetTemplates500ApplicationJSON extends SpeakeasyBase {
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
export declare enum GetTemplates422ApplicationJSONErrorEnum {
    UnableToParseJSONPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}
/**
 * Unprocessable Entity
 */
export declare class GetTemplates422ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: GetTemplates422ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum GetTemplates404ApplicationJSONErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}
/**
 * Not Found
 */
export declare class GetTemplates404ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: GetTemplates404ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum GetTemplates403ApplicationJSONErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}
/**
 * Forbidden
 */
export declare class GetTemplates403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: GetTemplates403ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum GetTemplates401ApplicationJSONErrorEnum {
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
export declare class GetTemplates401ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: GetTemplates401ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * An array of template objects
 */
export declare class GetTemplates200ApplicationJSON extends SpeakeasyBase {
    response?: shared.Template[];
}
export declare class GetTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * An array of template objects
     */
    getTemplates200ApplicationJSONObject?: GetTemplates200ApplicationJSON;
    /**
     * Unauthorized
     */
    getTemplates401ApplicationJSONObject?: GetTemplates401ApplicationJSON;
    /**
     * Forbidden
     */
    getTemplates403ApplicationJSONObject?: GetTemplates403ApplicationJSON;
    /**
     * Not Found
     */
    getTemplates404ApplicationJSONObject?: GetTemplates404ApplicationJSON;
    /**
     * Unprocessable Entity
     */
    getTemplates422ApplicationJSONObject?: GetTemplates422ApplicationJSON;
    /**
     * Internal Server Error
     */
    getTemplates500ApplicationJSONObject?: GetTemplates500ApplicationJSON;
}
