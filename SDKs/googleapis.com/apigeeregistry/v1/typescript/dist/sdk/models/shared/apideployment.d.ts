import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a service running at particular address that provides a particular version of an API. ApiDeployments have revisions which correspond to different configurations of a single deployment in time. Revision identifiers should be updated whenever the served API spec or endpoint address changes.
 */
export declare class ApiDeployment extends SpeakeasyBase {
    /**
     * Text briefly describing how to access the endpoint. Changes to this value will not affect the revision.
     */
    accessGuidance?: string;
    /**
     * Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.
     */
    annotations?: Record<string, string>;
    /**
     * The full resource name (including revision ID) of the spec of the API being served by the deployment. Changes to this value will update the revision. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec@revision}`
     */
    apiSpecRevision?: string;
    /**
     * Output only. Creation timestamp; when the deployment resource was created.
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
     * The address where the deployment is serving. Changes to this value will update the revision.
     */
    endpointUri?: string;
    /**
     * The address of the external channel of the API (e.g., the Developer Portal). Changes to this value will not affect the revision.
     */
    externalChannelUri?: string;
    /**
     * Text briefly identifying the intended audience of the API. Changes to this value will not affect the revision.
     */
    intendedAudience?: string;
    /**
     * Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.
     */
    labels?: Record<string, string>;
    /**
     * Resource name.
     */
    name?: string;
    /**
     * Output only. Revision creation timestamp; when the represented revision was created.
     */
    revisionCreateTime?: string;
    /**
     * Output only. Immutable. The revision ID of the deployment. A new revision is committed whenever the deployment contents are changed. The format is an 8-character hexadecimal string.
     */
    revisionId?: string;
    /**
     * Output only. Last update timestamp: when the represented revision was last modified.
     */
    revisionUpdateTime?: string;
}
/**
 * Describes a service running at particular address that provides a particular version of an API. ApiDeployments have revisions which correspond to different configurations of a single deployment in time. Revision identifiers should be updated whenever the served API spec or endpoint address changes.
 */
export declare class ApiDeploymentInput extends SpeakeasyBase {
    /**
     * Text briefly describing how to access the endpoint. Changes to this value will not affect the revision.
     */
    accessGuidance?: string;
    /**
     * Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.
     */
    annotations?: Record<string, string>;
    /**
     * The full resource name (including revision ID) of the spec of the API being served by the deployment. Changes to this value will update the revision. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec@revision}`
     */
    apiSpecRevision?: string;
    /**
     * A detailed description.
     */
    description?: string;
    /**
     * Human-meaningful name.
     */
    displayName?: string;
    /**
     * The address where the deployment is serving. Changes to this value will update the revision.
     */
    endpointUri?: string;
    /**
     * The address of the external channel of the API (e.g., the Developer Portal). Changes to this value will not affect the revision.
     */
    externalChannelUri?: string;
    /**
     * Text briefly identifying the intended audience of the API. Changes to this value will not affect the revision.
     */
    intendedAudience?: string;
    /**
     * Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.
     */
    labels?: Record<string, string>;
    /**
     * Resource name.
     */
    name?: string;
}
