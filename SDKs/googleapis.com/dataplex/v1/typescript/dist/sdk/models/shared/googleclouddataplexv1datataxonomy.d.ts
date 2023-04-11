import { SpeakeasyBase } from "../../../internal/utils";
/**
 * DataTaxonomy represents a set of hierarchical DataAttributes resources, grouped with a common theme Eg: 'SensitiveDataTaxonomy' can have attributes to manage PII data. It is defined at project level.
 */
export declare class GoogleCloudDataplexV1DataTaxonomy extends SpeakeasyBase {
    /**
     * Output only. The number of attributes in the DataTaxonomy.
     */
    attributeCount?: number;
    /**
     * Output only. The time when the DataTaxonomy was created.
     */
    createTime?: string;
    /**
     * Optional. Description of the DataTaxonomy.
     */
    description?: string;
    /**
     * Optional. User friendly display name.
     */
    displayName?: string;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Optional. User-defined labels for the DataTaxonomy.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The relative resource name of the DataTaxonomy, of the form: projects/{project_number}/locations/{location_id}/dataTaxonomies/{data_taxonomy_id}.
     */
    name?: string;
    /**
     * Output only. System generated globally unique ID for the dataTaxonomy. This ID will be different if the DataTaxonomy is deleted and re-created with the same name.
     */
    uid?: string;
    /**
     * Output only. The time when the DataTaxonomy was last updated.
     */
    updateTime?: string;
}
/**
 * DataTaxonomy represents a set of hierarchical DataAttributes resources, grouped with a common theme Eg: 'SensitiveDataTaxonomy' can have attributes to manage PII data. It is defined at project level.
 */
export declare class GoogleCloudDataplexV1DataTaxonomyInput extends SpeakeasyBase {
    /**
     * Optional. Description of the DataTaxonomy.
     */
    description?: string;
    /**
     * Optional. User friendly display name.
     */
    displayName?: string;
    /**
     * This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     */
    etag?: string;
    /**
     * Optional. User-defined labels for the DataTaxonomy.
     */
    labels?: Record<string, string>;
}
