import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateOrganizationAdaptivePolicyPolicyRequestBodyAcls extends SpeakeasyBase {
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
export declare class CreateOrganizationAdaptivePolicyPolicyRequestBodyDestinationGroup extends SpeakeasyBase {
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
 * The rule to apply if there is no matching ACL (default: "default")
 *
 * @remarks
 *
 */
export declare enum CreateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnum {
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
export declare class CreateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup extends SpeakeasyBase {
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
export declare class CreateOrganizationAdaptivePolicyPolicyRequestBody extends SpeakeasyBase {
    /**
     * An ordered array of adaptive policy ACLs (each requires one unique attribute) that apply to this policy (default: [])
     *
     * @remarks
     *
     */
    acls?: CreateOrganizationAdaptivePolicyPolicyRequestBodyAcls[];
    /**
     * The destination adaptive policy group (requires one unique attribute)
     *
     * @remarks
     *
     */
    destinationGroup: CreateOrganizationAdaptivePolicyPolicyRequestBodyDestinationGroup;
    /**
     * The rule to apply if there is no matching ACL (default: "default")
     *
     * @remarks
     *
     */
    lastEntryRule?: CreateOrganizationAdaptivePolicyPolicyRequestBodyLastEntryRuleEnum;
    /**
     * The source adaptive policy group (requires one unique attribute)
     *
     * @remarks
     *
     */
    sourceGroup: CreateOrganizationAdaptivePolicyPolicyRequestBodySourceGroup;
}
export declare class CreateOrganizationAdaptivePolicyPolicyRequest extends SpeakeasyBase {
    requestBody: CreateOrganizationAdaptivePolicyPolicyRequestBody;
    organizationId: string;
}
export declare class CreateOrganizationAdaptivePolicyPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createOrganizationAdaptivePolicyPolicy201ApplicationJSONObject?: Record<string, any>;
}
