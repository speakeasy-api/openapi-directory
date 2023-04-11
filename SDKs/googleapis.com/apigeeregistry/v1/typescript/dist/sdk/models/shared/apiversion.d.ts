import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a particular version of an API. ApiVersions are what consumers actually use.
 */
export declare class ApiVersion extends SpeakeasyBase {
    /**
     * Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.
     */
    annotations?: Record<string, string>;
    /**
     * Output only. Creation timestamp.
     */
    createTime?: string;
    /**
     * A detailed description.
     */
    description?: string;
    /**
     * Human-meaningful name.
     */
    displayName?: string;
    /**
     * Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.
     */
    labels?: Record<string, string>;
    /**
     * Resource name.
     */
    name?: string;
    /**
     * The primary spec for this version. Format: projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}
     */
    primarySpec?: string;
    /**
     * A user-definable description of the lifecycle phase of this API version. Format: free-form, but we expect single words that describe API maturity, e.g., "CONCEPT", "DESIGN", "DEVELOPMENT", "STAGING", "PRODUCTION", "DEPRECATED", "RETIRED".
     */
    state?: string;
    /**
     * Output only. Last update timestamp.
     */
    updateTime?: string;
}
/**
 * Describes a particular version of an API. ApiVersions are what consumers actually use.
 */
export declare class ApiVersionInput extends SpeakeasyBase {
    /**
     * Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.
     */
    annotations?: Record<string, string>;
    /**
     * A detailed description.
     */
    description?: string;
    /**
     * Human-meaningful name.
     */
    displayName?: string;
    /**
     * Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.
     */
    labels?: Record<string, string>;
    /**
     * Resource name.
     */
    name?: string;
    /**
     * The primary spec for this version. Format: projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}
     */
    primarySpec?: string;
    /**
     * A user-definable description of the lifecycle phase of this API version. Format: free-form, but we expect single words that describe API maturity, e.g., "CONCEPT", "DESIGN", "DEVELOPMENT", "STAGING", "PRODUCTION", "DEPRECATED", "RETIRED".
     */
    state?: string;
}
