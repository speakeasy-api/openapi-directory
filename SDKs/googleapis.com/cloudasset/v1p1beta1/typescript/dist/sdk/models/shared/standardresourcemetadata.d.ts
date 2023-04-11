import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The standard metadata of a cloud resource.
 */
export declare class StandardResourceMetadata extends SpeakeasyBase {
    /**
     * Additional searchable attributes of this resource. Informational only. The exact set of attributes is subject to change. For example: project id, DNS name etc.
     */
    additionalAttributes?: string[];
    /**
     * The type of this resource. For example: "compute.googleapis.com/Disk".
     */
    assetType?: string;
    /**
     * One or more paragraphs of text description of this resource. Maximum length could be up to 1M bytes.
     */
    description?: string;
    /**
     * The display name of this resource.
     */
    displayName?: string;
    /**
     * Labels associated with this resource. See [Labelling and grouping Google Cloud resources](https://cloud.google.com/blog/products/gcp/labelling-and-grouping-your-google-cloud-platform-resources) for more information.
     */
    labels?: Record<string, string>;
    /**
     * Location can be "global", regional like "us-east1", or zonal like "us-west1-b".
     */
    location?: string;
    /**
     * The full resource name. For example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more information.
     */
    name?: string;
    /**
     * Network tags associated with this resource. Like labels, network tags are a type of annotations used to group Google Cloud resources. See [Labelling Google Cloud resources](lhttps://cloud.google.com/blog/products/gcp/labelling-and-grouping-your-google-cloud-platform-resources) for more information.
     */
    networkTags?: string[];
    /**
     * The project that this resource belongs to, in the form of `projects/{project_number}`.
     */
    project?: string;
}
