import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataAccessSpec } from "./googleclouddataplexv1dataaccessspec";
import { GoogleCloudDataplexV1ResourceAccessSpec } from "./googleclouddataplexv1resourceaccessspec";
/**
 * Denotes one dataAttribute in a dataTaxonomy, for example, PII. DataAttribute resources can be defined in a hierarchy. A single dataAttribute resource can contain specs of multiple types PII - ResourceAccessSpec : - readers :foo@bar.com - DataAccessSpec : - readers :bar@foo.com
 */
export declare class GoogleCloudDataplexV1DataAttribute extends SpeakeasyBase {
    /**
     * Output only. The number of child attributes present for this attribute.
     */
    attributeCount?: number;
    /**
     * Output only. The time when the DataAttribute was created.
     */
    createTime?: string;
    /**
     * DataAccessSpec holds the access control configuration to be enforced on data stored within resources (eg: rows, columns in BigQuery Tables). When associated with data, the data is only accessible to principals explicitly granted access through the DataAccessSpec. Principals with access to the containing resource are not implicitly granted access.
     */
    dataAccessSpec?: GoogleCloudDataplexV1DataAccessSpec;
    /**
     * Optional. Description of the DataAttribute.
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
     * Optional. User-defined labels for the DataAttribute.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The relative resource name of the dataAttribute, of the form: projects/{project_number}/locations/{location_id}/dataTaxonomies/{dataTaxonomy}/attributes/{data_attribute_id}.
     */
    name?: string;
    /**
     * Optional. The ID of the parent DataAttribute resource, should belong to the same data taxonomy. Circular dependency in parent chain is not valid. Maximum depth of the hierarchy allowed is 4. a -> b -> c -> d -> e, depth = 4
     */
    parentId?: string;
    /**
     * ResourceAccessSpec holds the access control configuration to be enforced on the resources, for example, Cloud Storage bucket, BigQuery dataset, BigQuery table.
     */
    resourceAccessSpec?: GoogleCloudDataplexV1ResourceAccessSpec;
    /**
     * Output only. System generated globally unique ID for the DataAttribute. This ID will be different if the DataAttribute is deleted and re-created with the same name.
     */
    uid?: string;
    /**
     * Output only. The time when the DataAttribute was last updated.
     */
    updateTime?: string;
}
/**
 * Denotes one dataAttribute in a dataTaxonomy, for example, PII. DataAttribute resources can be defined in a hierarchy. A single dataAttribute resource can contain specs of multiple types PII - ResourceAccessSpec : - readers :foo@bar.com - DataAccessSpec : - readers :bar@foo.com
 */
export declare class GoogleCloudDataplexV1DataAttributeInput extends SpeakeasyBase {
    /**
     * DataAccessSpec holds the access control configuration to be enforced on data stored within resources (eg: rows, columns in BigQuery Tables). When associated with data, the data is only accessible to principals explicitly granted access through the DataAccessSpec. Principals with access to the containing resource are not implicitly granted access.
     */
    dataAccessSpec?: GoogleCloudDataplexV1DataAccessSpec;
    /**
     * Optional. Description of the DataAttribute.
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
     * Optional. User-defined labels for the DataAttribute.
     */
    labels?: Record<string, string>;
    /**
     * Optional. The ID of the parent DataAttribute resource, should belong to the same data taxonomy. Circular dependency in parent chain is not valid. Maximum depth of the hierarchy allowed is 4. a -> b -> c -> d -> e, depth = 4
     */
    parentId?: string;
    /**
     * ResourceAccessSpec holds the access control configuration to be enforced on the resources, for example, Cloud Storage bucket, BigQuery dataset, BigQuery table.
     */
    resourceAccessSpec?: GoogleCloudDataplexV1ResourceAccessSpec;
}
