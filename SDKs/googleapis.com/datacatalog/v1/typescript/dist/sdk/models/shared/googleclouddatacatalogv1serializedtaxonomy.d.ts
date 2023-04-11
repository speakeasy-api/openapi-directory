import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1SerializedPolicyTag } from "./googleclouddatacatalogv1serializedpolicytag";
export declare enum GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum {
    PolicyTypeUnspecified = "POLICY_TYPE_UNSPECIFIED",
    FineGrainedAccessControl = "FINE_GRAINED_ACCESS_CONTROL"
}
/**
 * A nested protocol buffer that represents a taxonomy and the hierarchy of its policy tags. Used for taxonomy replacement, import, and export.
 */
export declare class GoogleCloudDatacatalogV1SerializedTaxonomy extends SpeakeasyBase {
    /**
     * A list of policy types that are activated per taxonomy.
     */
    activatedPolicyTypes?: GoogleCloudDatacatalogV1SerializedTaxonomyActivatedPolicyTypesEnum[];
    /**
     * Description of the serialized taxonomy. At most 2000 bytes when encoded in UTF-8. If not set, defaults to an empty description.
     */
    description?: string;
    /**
     * Required. Display name of the taxonomy. At most 200 bytes when encoded in UTF-8.
     */
    displayName?: string;
    /**
     * Top level policy tags associated with the taxonomy, if any.
     */
    policyTags?: GoogleCloudDatacatalogV1SerializedPolicyTag[];
}
