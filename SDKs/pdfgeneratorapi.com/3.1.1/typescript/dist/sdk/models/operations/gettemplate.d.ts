import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTemplateQueryParams extends SpeakeasyBase {
    templateId: number;
}
export declare class GetTemplate200ApplicationJson extends SpeakeasyBase {
    response?: shared.TemplateDefinition;
}
export declare enum GetTemplate401ApplicationJsonErrorEnum {
    AuthenticationFailedRequestExpired = "Authentication failed: request expired",
    AuthenticationFailedSignatureOrSecretMissing = "Authentication failed: signature or secret missing",
    AuthenticationFailedWorkspaceMissing = "Authentication failed: workspace missing",
    AuthenticationFailedKeyMissing = "Authentication failed: key missing",
    AuthenticationFailedPropertyIssIssuerMissingInJwt = "Authentication failed: property 'iss' (issuer) missing in JWT",
    AuthenticationFailedPropertySubSubjectMissingInJwt = "Authentication failed: property 'sub' (subject) missing in JWT",
    AuthenticationFailedPropertyExpExpirationTimeMissingInJwt = "Authentication failed: property 'exp' (expiration time) missing in JWT",
    AuthenticationFailedInvalidIssIssuer = "Authentication failed: invalid 'iss' (issuer)",
    AuthenticationFailedIncorrectSignature = "Authentication failed: incorrect signature",
    AuthenticationFailed = "Authentication failed"
}
export declare class GetTemplate401ApplicationJson extends SpeakeasyBase {
    error?: GetTemplate401ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum GetTemplate403ApplicationJsonErrorEnum {
    YourAccountHasExceededTheMonthlyDocumentGenerationLimit = "Your account has exceeded the monthly document generation limit."
}
export declare class GetTemplate403ApplicationJson extends SpeakeasyBase {
    error?: GetTemplate403ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum GetTemplate404ApplicationJsonErrorEnum {
    EntityNotFound = "Entity not found",
    ResourceNotFound = "Resource not found",
    NoneOfTheTemplatesIsAvailableForTheWorkspace = "None of the templates is available for the workspace."
}
export declare class GetTemplate404ApplicationJson extends SpeakeasyBase {
    error?: GetTemplate404ApplicationJsonErrorEnum;
    status?: number;
}
export declare enum GetTemplate422ApplicationJsonErrorEnum {
    UnableToParseJsonPleaseCheckFormatting = "Unable to parse JSON, please check formatting",
    RequiredParameterMissing = "Required parameter missing",
    RequiredParameterMissingTemplateDefinitionNotDefined = "Required parameter missing: template definition not defined",
    RequiredParameterMissingTemplateNotDefined = "Required parameter missing: template not defined"
}
export declare class GetTemplate422ApplicationJson extends SpeakeasyBase {
    error?: GetTemplate422ApplicationJsonErrorEnum;
    status?: number;
}
export declare class GetTemplate500ApplicationJson extends SpeakeasyBase {
    error?: string;
    status?: number;
}
export declare class GetTemplateRequest extends SpeakeasyBase {
    queryParams: GetTemplateQueryParams;
}
export declare class GetTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTemplate200ApplicationJSONObject?: GetTemplate200ApplicationJson;
    getTemplate401ApplicationJSONObject?: GetTemplate401ApplicationJson;
    getTemplate403ApplicationJSONObject?: GetTemplate403ApplicationJson;
    getTemplate404ApplicationJSONObject?: GetTemplate404ApplicationJson;
    getTemplate422ApplicationJSONObject?: GetTemplate422ApplicationJson;
    getTemplate500ApplicationJSONObject?: GetTemplate500ApplicationJson;
}
