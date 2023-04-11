import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteWorkspaceRequest extends SpeakeasyBase {
    /**
     * Workspace identifier
     */
    workspaceId: string;
}
/**
 * Internal Server Error
 */
export declare class DeleteWorkspace500ApplicationJSON extends SpeakeasyBase {
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
export declare enum DeleteWorkspace422ApplicationJSONErrorEnum {
    UnableToParseJSONPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}
/**
 * Unprocessable Entity
 */
export declare class DeleteWorkspace422ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: DeleteWorkspace422ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum DeleteWorkspace404ApplicationJSONErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}
/**
 * Not Found
 */
export declare class DeleteWorkspace404ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: DeleteWorkspace404ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum DeleteWorkspace403ApplicationJSONErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}
/**
 * Forbidden
 */
export declare class DeleteWorkspace403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: DeleteWorkspace403ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum DeleteWorkspace401ApplicationJSONErrorEnum {
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
export declare class DeleteWorkspace401ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: DeleteWorkspace401ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
export declare class DeleteWorkspace200ApplicationJSONResponse extends SpeakeasyBase {
    success?: boolean;
}
/**
 * The request was successfully executed.
 */
export declare class DeleteWorkspace200ApplicationJSON extends SpeakeasyBase {
    response?: DeleteWorkspace200ApplicationJSONResponse;
}
export declare class DeleteWorkspaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The request was successfully executed.
     */
    deleteWorkspace200ApplicationJSONObject?: DeleteWorkspace200ApplicationJSON;
    /**
     * Unauthorized
     */
    deleteWorkspace401ApplicationJSONObject?: DeleteWorkspace401ApplicationJSON;
    /**
     * Forbidden
     */
    deleteWorkspace403ApplicationJSONObject?: DeleteWorkspace403ApplicationJSON;
    /**
     * Not Found
     */
    deleteWorkspace404ApplicationJSONObject?: DeleteWorkspace404ApplicationJSON;
    /**
     * Unprocessable Entity
     */
    deleteWorkspace422ApplicationJSONObject?: DeleteWorkspace422ApplicationJSON;
    /**
     * Internal Server Error
     */
    deleteWorkspace500ApplicationJSONObject?: DeleteWorkspace500ApplicationJSON;
}
