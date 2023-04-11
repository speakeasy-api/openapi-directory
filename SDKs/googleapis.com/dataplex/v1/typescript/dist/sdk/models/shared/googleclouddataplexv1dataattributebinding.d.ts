import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataAttributeBindingPath } from "./googleclouddataplexv1dataattributebindingpath";
/**
 * DataAttributeBinding represents binding of attributes to resources. Eg: Bind 'CustomerInfo' entity with 'PII' attribute.
 */
export declare class GoogleCloudDataplexV1DataAttributeBinding extends SpeakeasyBase {
    /**
     * Optional. List of attributes to be associated with the resource, provided in the form: projects/{project}/locations/{location}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id}
     */
    attributes?: string[];
    /**
     * Output only. The time when the DataAttributeBinding was created.
     */
    createTime?: string;
    /**
     * Optional. Description of the DataAttributeBinding.
     */
    description?: string;
    /**
     * Optional. User friendly display name.
     */
    displayName?: string;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Etags must be used when calling the DeleteDataAttributeBinding and the UpdateDataAttributeBinding method.
     */
    etag?: string;
    /**
     * Optional. User-defined labels for the DataAttributeBinding.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The relative resource name of the Data Attribute Binding, of the form: projects/{project_number}/locations/{location}/dataAttributeBindings/{data_attribute_binding_id}
     */
    name?: string;
    /**
     * Optional. The list of paths for items within the associated resource (eg. columns and partitions within a table) along with attribute bindings.
     */
    paths?: GoogleCloudDataplexV1DataAttributeBindingPath[];
    /**
     * Optional. Immutable. The resource name of the resource that is associated to attributes. Presently, only entity resource is supported in the form: projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/entities/{entity_id} Must belong in the same project and region as the attribute binding, and there can only exist one active binding for a resource.
     */
    resource?: string;
    /**
     * Output only. System generated globally unique ID for the DataAttributeBinding. This ID will be different if the DataAttributeBinding is deleted and re-created with the same name.
     */
    uid?: string;
    /**
     * Output only. The time when the DataAttributeBinding was last updated.
     */
    updateTime?: string;
}
/**
 * DataAttributeBinding represents binding of attributes to resources. Eg: Bind 'CustomerInfo' entity with 'PII' attribute.
 */
export declare class GoogleCloudDataplexV1DataAttributeBindingInput extends SpeakeasyBase {
    /**
     * Optional. List of attributes to be associated with the resource, provided in the form: projects/{project}/locations/{location}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id}
     */
    attributes?: string[];
    /**
     * Optional. Description of the DataAttributeBinding.
     */
    description?: string;
    /**
     * Optional. User friendly display name.
     */
    displayName?: string;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. Etags must be used when calling the DeleteDataAttributeBinding and the UpdateDataAttributeBinding method.
     */
    etag?: string;
    /**
     * Optional. User-defined labels for the DataAttributeBinding.
     */
    labels?: Record<string, string>;
    /**
     * Optional. The list of paths for items within the associated resource (eg. columns and partitions within a table) along with attribute bindings.
     */
    paths?: GoogleCloudDataplexV1DataAttributeBindingPath[];
    /**
     * Optional. Immutable. The resource name of the resource that is associated to attributes. Presently, only entity resource is supported in the form: projects/{project}/locations/{location}/lakes/{lake}/zones/{zone}/entities/{entity_id} Must belong in the same project and region as the attribute binding, and there can only exist one active binding for a resource.
     */
    resource?: string;
}
