import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationCodeLink } from "./authorizationcodelink";
import { EnumOption } from "./enumoption";
import { RoleGrant } from "./rolegrant";
/**
 * State of the config variable.
 */
export declare enum ConfigVariableTemplateStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Deprecated = "DEPRECATED"
}
/**
 * Type of the parameter: string, int, bool etc. consider custom type for the benefit for the validation.
 */
export declare enum ConfigVariableTemplateValueTypeEnum {
    ValueTypeUnspecified = "VALUE_TYPE_UNSPECIFIED",
    String = "STRING",
    Int = "INT",
    Bool = "BOOL",
    Secret = "SECRET",
    Enum = "ENUM",
    AuthorizationCode = "AUTHORIZATION_CODE"
}
/**
 * ConfigVariableTemplate provides metadata about a `ConfigVariable` that is used in a Connection.
 */
export declare class ConfigVariableTemplate extends SpeakeasyBase {
    /**
     * This configuration captures the details required to render an authorization link for the OAuth Authorization Code Flow.
     */
    authorizationCodeLink?: AuthorizationCodeLink;
    /**
     * Description.
     */
    description?: string;
    /**
     * Display name of the parameter.
     */
    displayName?: string;
    /**
     * Enum options. To be populated if `ValueType` is `ENUM`
     */
    enumOptions?: EnumOption[];
    /**
     * Indicates if current template is part of advanced settings
     */
    isAdvanced?: boolean;
    /**
     * Key of the config variable.
     */
    key?: string;
    /**
     * Flag represents that this `ConfigVariable` must be provided for a connection.
     */
    required?: boolean;
    /**
     * This configuration defines all the Cloud IAM roles that needs to be granted to a particular GCP resource for the selected prinicpal like service account. These configurations will let UI display to customers what IAM roles need to be granted by them. Or these configurations can be used by the UI to render a 'grant' button to do the same on behalf of the user.
     */
    roleGrant?: RoleGrant;
    /**
     * State of the config variable.
     */
    state?: ConfigVariableTemplateStateEnum;
    /**
     * Regular expression in RE2 syntax used for validating the `value` of a `ConfigVariable`.
     */
    validationRegex?: string;
    /**
     * Type of the parameter: string, int, bool etc. consider custom type for the benefit for the validation.
     */
    valueType?: ConfigVariableTemplateValueTypeEnum;
}
