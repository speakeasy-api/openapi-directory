import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1beta1ValueMatcher } from "./googlecloudrecommenderv1beta1valuematcher";
/**
 * Contains an operation for a resource loosely based on the JSON-PATCH format with support for: * Custom filters for describing partial array patch. * Extended path values for describing nested arrays. * Custom fields for describing the resource for which the operation is being described. * Allows extension to custom operations not natively supported by RFC6902. See https://tools.ietf.org/html/rfc6902 for details on the original RFC.
 */
export declare class GoogleCloudRecommenderV1beta1Operation extends SpeakeasyBase {
    /**
     * Type of this operation. Contains one of 'add', 'remove', 'replace', 'move', 'copy', 'test' and 'custom' operations. This field is case-insensitive and always populated.
     */
    action?: string;
    /**
     * Path to the target field being operated on. If the operation is at the resource level, then path should be "/". This field is always populated.
     */
    path?: string;
    /**
     * Set of filters to apply if `path` refers to array elements or nested array elements in order to narrow down to a single unique element that is being tested/modified. This is intended to be an exact match per filter. To perform advanced matching, use path_value_matchers. * Example: ``` { "/versions/* /name" : "it-123" "/versions/* /targetSize/percent": 20 } ``` * Example: ``` { "/bindings/* /role": "roles/owner" "/bindings/* /condition" : null } ``` * Example: ``` { "/bindings/* /role": "roles/owner" "/bindings/* /members/*" : ["x@example.com", "y@example.com"] } ``` When both path_filters and path_value_matchers are set, an implicit AND must be performed.
     */
    pathFilters?: Record<string, any>;
    /**
     * Similar to path_filters, this contains set of filters to apply if `path` field refers to array elements. This is meant to support value matching beyond exact match. To perform exact match, use path_filters. When both path_filters and path_value_matchers are set, an implicit AND must be performed.
     */
    pathValueMatchers?: Record<string, GoogleCloudRecommenderV1beta1ValueMatcher>;
    /**
     * Contains the fully qualified resource name. This field is always populated. ex: //cloudresourcemanager.googleapis.com/projects/foo.
     */
    resource?: string;
    /**
     * Type of GCP resource being modified/tested. This field is always populated. Example: cloudresourcemanager.googleapis.com/Project, compute.googleapis.com/Instance
     */
    resourceType?: string;
    /**
     * Can be set with action 'copy' or 'move' to indicate the source field within resource or source_resource, ignored if provided for other operation types.
     */
    sourcePath?: string;
    /**
     * Can be set with action 'copy' to copy resource configuration across different resources of the same type. Example: A resource clone can be done via action = 'copy', path = "/", from = "/", source_resource = and resource_name = . This field is empty for all other values of `action`.
     */
    sourceResource?: string;
    /**
     * Value for the `path` field. Will be set for actions:'add'/'replace'. Maybe set for action: 'test'. Either this or `value_matcher` will be set for 'test' operation. An exact match must be performed.
     */
    value?: any;
    /**
     * Contains various matching options for values for a GCP resource field.
     */
    valueMatcher?: GoogleCloudRecommenderV1beta1ValueMatcher;
}
