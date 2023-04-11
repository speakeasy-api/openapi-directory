import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MergeTemplateRequest extends SpeakeasyBase {
    /**
     * Data used to generate the PDF. This can be JSON encoded string or a public URL to your JSON file.
     */
    data: shared.Data;
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
    /**
     * Template unique identifier
     */
    templateId: number;
}
/**
 * Internal Server Error
 */
export declare class MergeTemplate500ApplicationJSON extends SpeakeasyBase {
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
export declare enum MergeTemplate422ApplicationJSONErrorEnum {
    UnableToParseJSONPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}
/**
 * Unprocessable Entity
 */
export declare class MergeTemplate422ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: MergeTemplate422ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum MergeTemplate404ApplicationJSONErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}
/**
 * Not Found
 */
export declare class MergeTemplate404ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: MergeTemplate404ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum MergeTemplate403ApplicationJSONErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}
/**
 * Forbidden
 */
export declare class MergeTemplate403ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: MergeTemplate403ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
/**
 * Error description
 */
export declare enum MergeTemplate401ApplicationJSONErrorEnum {
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
export declare class MergeTemplate401ApplicationJSON extends SpeakeasyBase {
    /**
     * Error description
     */
    error?: MergeTemplate401ApplicationJSONErrorEnum;
    /**
     * HTTP Error code
     */
    status?: number;
}
export declare class MergeTemplate200ApplicationJSONMeta extends SpeakeasyBase {
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
export declare class MergeTemplate200ApplicationJSON extends SpeakeasyBase {
    meta?: MergeTemplate200ApplicationJSONMeta;
    /**
     * Base64 encoded document if the output=base64 is used or URL to the document when the output=url is used.
     */
    response?: string;
}
export declare class MergeTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Document data
     */
    mergeTemplate200ApplicationJSONObject?: MergeTemplate200ApplicationJSON;
    /**
     * Unauthorized
     */
    mergeTemplate401ApplicationJSONObject?: MergeTemplate401ApplicationJSON;
    /**
     * Forbidden
     */
    mergeTemplate403ApplicationJSONObject?: MergeTemplate403ApplicationJSON;
    /**
     * Not Found
     */
    mergeTemplate404ApplicationJSONObject?: MergeTemplate404ApplicationJSON;
    /**
     * Unprocessable Entity
     */
    mergeTemplate422ApplicationJSONObject?: MergeTemplate422ApplicationJSON;
    /**
     * Internal Server Error
     */
    mergeTemplate500ApplicationJSONObject?: MergeTemplate500ApplicationJSON;
}
