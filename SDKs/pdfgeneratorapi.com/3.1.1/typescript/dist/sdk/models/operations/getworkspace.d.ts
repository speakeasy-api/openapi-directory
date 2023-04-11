import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWorkspaceRequest extends SpeakeasyBase {
    /**
     * Workspace identifier
     */
    workspaceId: string;
}
/**
 * Internal Server Error
 */
export declare class GetWorkspace500ApplicationJSON extends SpeakeasyBase {
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
export declare enum GetWorkspace422ApplicationJSONErrorEnum {
    UnableToParseJSONPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}
/**
 * Unprocessable Entity
 */
export declare class GetWorkspace422ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: GetWorkspace422ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum GetWorkspace404ApplicationJSONErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}
/**
 * Not Found
 */
export declare class GetWorkspace404ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: GetWorkspace404ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum GetWorkspace403ApplicationJSONErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}
/**
 * Forbidden
 */
export declare class GetWorkspace403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: GetWorkspace403ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum GetWorkspace401ApplicationJSONErrorEnum {
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
export declare class GetWorkspace401ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: GetWorkspace401ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Workspace information
 */
export declare class GetWorkspace200ApplicationJSON extends SpeakeasyBase {
    response?: shared.Workspace;
}
export declare class GetWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Workspace information
     */
    getWorkspace200ApplicationJSONObject?: GetWorkspace200ApplicationJSON;
    /**
     * Unauthorized
     */
    getWorkspace401ApplicationJSONObject?: GetWorkspace401ApplicationJSON;
    /**
     * Forbidden
     */
    getWorkspace403ApplicationJSONObject?: GetWorkspace403ApplicationJSON;
    /**
     * Not Found
     */
    getWorkspace404ApplicationJSONObject?: GetWorkspace404ApplicationJSON;
    /**
     * Unprocessable Entity
     */
    getWorkspace422ApplicationJSONObject?: GetWorkspace422ApplicationJSON;
    /**
     * Internal Server Error
     */
    getWorkspace500ApplicationJSONObject?: GetWorkspace500ApplicationJSON;
}
