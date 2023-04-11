import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A nested protocol buffer that represents a policy tag and all its descendants.
 */
export declare class GoogleCloudDatacatalogV1SerializedPolicyTag extends SpeakeasyBase {
    /**
     * Children of the policy tag, if any.
     */
    childPolicyTags?: GoogleCloudDatacatalogV1SerializedPolicyTag[];
    /**
     * Description of the serialized policy tag. At most 2000 bytes when encoded in UTF-8. If not set, defaults to an empty description.
     */
    description?: string;
    /**
     * Required. Display name of the policy tag. At most 200 bytes when encoded in UTF-8.
     */
    displayName?: string;
    /**
     * Resource name of the policy tag. This field is ignored when calling `ImportTaxonomies`.
     */
    policyTag?: string;
}
