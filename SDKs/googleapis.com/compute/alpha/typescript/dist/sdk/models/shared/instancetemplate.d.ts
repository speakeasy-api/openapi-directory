import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceProperties } from "./instanceproperties";
import { SourceInstanceParams } from "./sourceinstanceparams";
/**
 * Represents an Instance Template resource. You can use instance templates to create VM instances and managed instance groups. For more information, read Instance Templates.
 */
export declare class InstanceTemplate extends SpeakeasyBase {
    /**
     * [Output Only] The creation timestamp for this instance template in RFC3339 text format.
     */
    creationTimestamp?: string;
    /**
     * An optional description of this resource. Provide this property when you create the resource.
     */
    description?: string;
    /**
     * [Output Only] A unique identifier for this instance template. The server defines this identifier.
     */
    id?: string;
    /**
     * [Output Only] The resource type, which is always compute#instanceTemplate for instance templates.
     */
    kind?: string;
    /**
     * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z]([-a-z0-9]*[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;
    properties?: InstanceProperties;
    /**
     * [Output Only] URL of the region where the instance template resides. Only applicable for regional resources.
     */
    region?: string;
    /**
     * [Output Only] The URL for this instance template. The server defines this URL.
     */
    selfLink?: string;
    /**
     * [Output Only] Server-defined URL for this resource with the resource id.
     */
    selfLinkWithId?: string;
    /**
     * The source instance used to create the template. You can provide this as a partial or full URL to the resource. For example, the following are valid values: - https://www.googleapis.com/compute/v1/projects/project/zones/zone /instances/instance - projects/project/zones/zone/instances/instance
     */
    sourceInstance?: string;
    /**
     * A specification of the parameters to use when creating the instance template from a source instance.
     */
    sourceInstanceParams?: SourceInstanceParams;
}
