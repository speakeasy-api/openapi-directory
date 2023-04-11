import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1SerializedPolicyTag } from "./googleclouddatacatalogv1beta1serializedpolicytag";
export declare enum GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum {
    PolicyTypeUnspecified = "POLICY_TYPE_UNSPECIFIED",
    FineGrainedAccessControl = "FINE_GRAINED_ACCESS_CONTROL"
}
/**
 * Message capturing a taxonomy and its policy tag hierarchy as a nested proto. Used for taxonomy import/export and mutation.
 */
export declare class GoogleCloudDatacatalogV1beta1SerializedTaxonomy extends SpeakeasyBase {
    /**
     * A list of policy types that are activated for a taxonomy.
     */
    activatedPolicyTypes?: GoogleCloudDatacatalogV1beta1SerializedTaxonomyActivatedPolicyTypesEnum[];
    /**
     * Description of the serialized taxonomy. The length of the description is limited to 2000 bytes when encoded in UTF-8. If not set, defaults to an empty description.
     */
    description?: string;
    /**
     * Required. Display name of the taxonomy. Max 200 bytes when encoded in UTF-8.
     */
    displayName?: string;
    /**
     * Top level policy tags associated with the taxonomy if any.
     */
    policyTags?: GoogleCloudDatacatalogV1beta1SerializedPolicyTag[];
}
