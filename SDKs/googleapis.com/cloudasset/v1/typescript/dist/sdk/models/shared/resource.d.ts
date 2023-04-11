import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A representation of a Google Cloud resource.
 */
export declare class Resource extends SpeakeasyBase {
    /**
     * The content of the resource, in which some sensitive fields are removed and may not be present.
     */
    data?: Record<string, any>;
    /**
     * The URL of the discovery document containing the resource's JSON schema. Example: `https://www.googleapis.com/discovery/v1/apis/compute/v1/rest` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable.
     */
    discoveryDocumentUri?: string;
    /**
     * The JSON schema name listed in the discovery document. Example: `Project` This value is unspecified for resources that do not have an API based on a discovery document, such as Cloud Bigtable.
     */
    discoveryName?: string;
    /**
     * The location of the resource in Google Cloud, such as its zone and region. For more information, see https://cloud.google.com/about/locations/.
     */
    location?: string;
    /**
     * The full name of the immediate parent of this resource. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information. For Google Cloud assets, this value is the parent resource defined in the [IAM policy hierarchy](https://cloud.google.com/iam/docs/overview#policy_hierarchy). Example: `//cloudresourcemanager.googleapis.com/projects/my_project_123` For third-party assets, this field may be set differently.
     */
    parent?: string;
    /**
     * The REST URL for accessing the resource. An HTTP `GET` request using this URL returns the resource itself. Example: `https://cloudresourcemanager.googleapis.com/v1/projects/my-project-123` This value is unspecified for resources without a REST API.
     */
    resourceUrl?: string;
    /**
     * The API version. Example: `v1`
     */
    version?: string;
}
