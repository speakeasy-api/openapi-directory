import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message representing one policy tag when exported as a nested proto.
 */
export declare class GoogleCloudDatacatalogV1beta1SerializedPolicyTag extends SpeakeasyBase {
    /**
     * Children of the policy tag if any.
     */
    childPolicyTags?: GoogleCloudDatacatalogV1beta1SerializedPolicyTag[];
    /**
     * Description of the serialized policy tag. The length of the description is limited to 2000 bytes when encoded in UTF-8. If not set, defaults to an empty description.
     */
    description?: string;
    /**
     * Required. Display name of the policy tag. Max 200 bytes when encoded in UTF-8.
     */
    displayName?: string;
    /**
     * Resource name of the policy tag. This field will be ignored when calling ImportTaxonomies.
     */
    policyTag?: string;
}
