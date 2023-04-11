import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls extends SpeakeasyBase {
    /**
     * The ID of the adaptive policy ACL
     */
    id?: string;
    /**
     * The name of the adaptive policy ACL
     */
    name?: string;
}
/**
 * The destination adaptive policy group (requires one unique attribute)
 *
 * @remarks
 *
 */
export declare class UpdateOrganizationAdaptivePolicyPolicyRequestBodyDestinationGroup extends SpeakeasyBase {
    /**
     * The ID of the destination adaptive policy group
     */
    id?: string;
    /**
     * The name of the destination adaptive policy group
     */
    name?: string;
    /**
     * The SGT of the destination adaptive policy group
     */
    sgt?: number;
}
/**
 * The rule to apply if there is no matching ACL
 *
 * @remarks
 *
 */
export declare enum UpdateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnum {
    Allow = "allow",
    Default = "default",
    Deny = "deny"
}
/**
 * The source adaptive policy group (requires one unique attribute)
 *
 * @remarks
 *
 */
export declare class UpdateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup extends SpeakeasyBase {
    /**
     * The ID of the source adaptive policy group
     */
    id?: string;
    /**
     * The name of the source adaptive policy group
     */
    name?: string;
    /**
     * The SGT of the source adaptive policy group
     */
    sgt?: number;
}
export declare class UpdateOrganizationAdaptivePolicyPolicyRequestBody extends SpeakeasyBase {
    /**
     * An ordered array of adaptive policy ACLs (each requires one unique attribute) that apply to this policy
     *
     * @remarks
     *
     */
    acls?: UpdateOrganizationAdaptivePolicyPolicyRequestBodyAcls[];
    /**
     * The destination adaptive policy group (requires one unique attribute)
     *
     * @remarks
     *
     */
    destinationGroup?: UpdateOrganizationAdaptivePolicyPolicyRequestBodyDestinationGroup;
    /**
     * The rule to apply if there is no matching ACL
     *
     * @remarks
     *
     */
    lastEntryRule?: UpdateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnum;
    /**
     * The source adaptive policy group (requires one unique attribute)
     *
     * @remarks
     *
     */
    sourceGroup?: UpdateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup;
}
export declare class UpdateOrganizationAdaptivePolicyPolicyRequest extends SpeakeasyBase {
    requestBody?: UpdateOrganizationAdaptivePolicyPolicyRequestBody;
    id: string;
    organizationId: string;
}
export declare class UpdateOrganizationAdaptivePolicyPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganizationAdaptivePolicyPolicy200ApplicationJSONObject?: Record<string, any>;
}
