import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteTemplateRequest extends SpeakeasyBase {
    /**
     * Template unique identifier
     */
    templateId: number;
}
/**
 * Internal Server Error
 */
export declare class DeleteTemplate500ApplicationJSON extends SpeakeasyBase {
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
export declare enum DeleteTemplate422ApplicationJSONErrorEnum {
    UnableToParseJSONPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}
/**
 * Unprocessable Entity
 */
export declare class DeleteTemplate422ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: DeleteTemplate422ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum DeleteTemplate404ApplicationJSONErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}
/**
 * Not Found
 */
export declare class DeleteTemplate404ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: DeleteTemplate404ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum DeleteTemplate403ApplicationJSONErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}
/**
 * Forbidden
 */
export declare class DeleteTemplate403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: DeleteTemplate403ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum DeleteTemplate401ApplicationJSONErrorEnum {
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
export declare class DeleteTemplate401ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: DeleteTemplate401ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
export declare class DeleteTemplate200ApplicationJSONResponse extends SpeakeasyBase {
    success?: boolean;
}
/**
 * The request was successfully executed.
 */
export declare class DeleteTemplate200ApplicationJSON extends SpeakeasyBase {
    response?: DeleteTemplate200ApplicationJSONResponse;
}
export declare class DeleteTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request was successfully executed.
     */
    deleteTemplate200ApplicationJSONObject?: DeleteTemplate200ApplicationJSON;
    /**
     * Unauthorized
     */
    deleteTemplate401ApplicationJSONObject?: DeleteTemplate401ApplicationJSON;
    /**
     * Forbidden
     */
    deleteTemplate403ApplicationJSONObject?: DeleteTemplate403ApplicationJSON;
    /**
     * Not Found
     */
    deleteTemplate404ApplicationJSONObject?: DeleteTemplate404ApplicationJSON;
    /**
     * Unprocessable Entity
     */
    deleteTemplate422ApplicationJSONObject?: DeleteTemplate422ApplicationJSON;
    /**
     * Internal Server Error
     */
    deleteTemplate500ApplicationJSONObject?: DeleteTemplate500ApplicationJSON;
}
