import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Specify the editor UI language. Defaults to organization editor language.
 */
export declare enum GetEditorUrlLanguageEnum {
    En = "en",
    Et = "et",
    Cs = "cs",
    Sk = "sk",
    Ru = "ru"
}
export declare class GetEditorUrlRequest extends SpeakeasyBase {
    /**
     * Data used to generate the PDF. This can be JSON encoded string or a public URL to your JSON file.
     */
    requestBody: Record<string, any>;
    /**
     * Specify the editor UI language. Defaults to organization editor language.
     */
    language?: GetEditorUrlLanguageEnum;
    /**
     * Template unique identifier
     */
    templateId: number;
}
/**
 * Internal Server Error
 */
export declare class GetEditorUrl500ApplicationJSON extends SpeakeasyBase {
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
export declare enum GetEditorUrl422ApplicationJSONErrorEnum {
    UnableToParseJSONPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}
/**
 * Unprocessable Entity
 */
export declare class GetEditorUrl422ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: GetEditorUrl422ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum GetEditorUrl404ApplicationJSONErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}
/**
 * Not Found
 */
export declare class GetEditorUrl404ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: GetEditorUrl404ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum GetEditorUrl403ApplicationJSONErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}
/**
 * Forbidden
 */
export declare class GetEditorUrl403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: GetEditorUrl403ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum GetEditorUrl401ApplicationJSONErrorEnum {
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
export declare class GetEditorUrl401ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: GetEditorUrl401ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Returns an URL which you can use to redirect your user to the editor or use as iframe source
 */
export declare class GetEditorUrl200ApplicationJSON extends SpeakeasyBase {
    response?: string;
}
export declare class GetEditorUrlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns an URL which you can use to redirect your user to the editor or use as iframe source
     */
    getEditorUrl200ApplicationJSONObject?: GetEditorUrl200ApplicationJSON;
    /**
     * Unauthorized
     */
    getEditorUrl401ApplicationJSONObject?: GetEditorUrl401ApplicationJSON;
    /**
     * Forbidden
     */
    getEditorUrl403ApplicationJSONObject?: GetEditorUrl403ApplicationJSON;
    /**
     * Not Found
     */
    getEditorUrl404ApplicationJSONObject?: GetEditorUrl404ApplicationJSON;
    /**
     * Unprocessable Entity
     */
    getEditorUrl422ApplicationJSONObject?: GetEditorUrl422ApplicationJSON;
    /**
     * Internal Server Error
     */
    getEditorUrl500ApplicationJSONObject?: GetEditorUrl500ApplicationJSON;
}
