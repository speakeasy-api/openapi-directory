import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MergeTemplatesRequest extends SpeakeasyBase {
    /**
     * Data used to specify templates and data objects which are used to merge the template
     */
    requestBody: shared.BatchData[];
    /**
     * Document format. The zip option will return a ZIP file with PDF files.
     */
    format?: shared.FormatEnum;
    /**
     * Document name, returned in the meta data.
     */
    name?: string;
    /**
     * Response format. With the url option, the document is stored for 30 days and automatically deleted.
     */
    output?: shared.OutputEnum;
}
/**
 * Internal Server Error
 */
export declare class MergeTemplates500ApplicationJSON extends SpeakeasyBase {
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
export declare enum MergeTemplates422ApplicationJSONErrorEnum {
    UnableToParseJSONPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}
/**
 * Unprocessable Entity
 */
export declare class MergeTemplates422ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: MergeTemplates422ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum MergeTemplates404ApplicationJSONErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}
/**
 * Not Found
 */
export declare class MergeTemplates404ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: MergeTemplates404ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum MergeTemplates403ApplicationJSONErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}
/**
 * Forbidden
 */
export declare class MergeTemplates403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: MergeTemplates403ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum MergeTemplates401ApplicationJSONErrorEnum {
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
export declare class MergeTemplates401ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: MergeTemplates401ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
export declare class MergeTemplates200ApplicationJSONMeta extends SpeakeasyBase {
    /**
     * Document content type.
     */
    contentType?: string;
    /**
     * Document name without the file extension.
     */
    displayName?: string;
    /**
     * Document encoding
     */
    encoding?: string;
    /**
     * Document name. This value is automatically generated if name attribute is not defined in request.
     */
    name?: string;
}
/**
 * Document data
 */
export declare class MergeTemplates200ApplicationJSON extends SpeakeasyBase {
    meta?: MergeTemplates200ApplicationJSONMeta;
    /**
     * Base64 encoded document if the output=base64 is used or URL to the document when the output=url is used.
     */
    response?: string;
}
export declare class MergeTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Document data
     */
    mergeTemplates200ApplicationJSONObject?: MergeTemplates200ApplicationJSON;
    /**
     * Unauthorized
     */
    mergeTemplates401ApplicationJSONObject?: MergeTemplates401ApplicationJSON;
    /**
     * Forbidden
     */
    mergeTemplates403ApplicationJSONObject?: MergeTemplates403ApplicationJSON;
    /**
     * Not Found
     */
    mergeTemplates404ApplicationJSONObject?: MergeTemplates404ApplicationJSON;
    /**
     * Unprocessable Entity
     */
    mergeTemplates422ApplicationJSONObject?: MergeTemplates422ApplicationJSON;
    /**
     * Internal Server Error
     */
    mergeTemplates500ApplicationJSONObject?: MergeTemplates500ApplicationJSON;
}
