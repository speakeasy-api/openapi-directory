import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a subresource of the given resource, and associated bindings with it. Currently supported subresources are column and partition schema fields within a table.
 */
export declare class GoogleCloudDataplexV1DataAttributeBindingPath extends SpeakeasyBase {
    /**
     * Optional. List of attributes to be associated with the path of the resource, provided in the form: projects/{project}/locations/{location}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id}
     */
    attributes?: string[];
    /**
     * Required. The name identifier of the path. Nested columns should be of the form: 'address.city'.
     */
    name?: string;
}
