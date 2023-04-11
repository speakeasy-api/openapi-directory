import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationAdaptivePolicyOverviewRequest extends SpeakeasyBase {
    organizationId: string;
}
/**
 * The current amount of various adaptive policy objects.
 */
export declare class GetOrganizationAdaptivePolicyOverview200ApplicationJSONCounts extends SpeakeasyBase {
    /**
     * Number of adaptive policies currently in the organization that allow all traffic.
     */
    allowPolicies?: number;
    /**
     * Number of user-created adaptive policy ACLs currently in the organization.
     */
    customAcls?: number;
    /**
     * Number of user-created adaptive policy groups currently in the organization.
     */
    customGroups?: number;
    /**
     * Number of adaptive policies currently in the organization that deny all traffic.
     */
    denyPolicies?: number;
    /**
     * Number of adaptive policy groups currently in the organization.
     */
    groups?: number;
    /**
     * Number of adaptive policies currently in the organization.
     */
    policies?: number;
    /**
     * Number of policy objects (with the adaptive policy type) currently in the organization.
     */
    policyObjects?: number;
}
/**
 * The current limits of various adaptive policy objects.
 */
export declare class GetOrganizationAdaptivePolicyOverview200ApplicationJSONLimits extends SpeakeasyBase {
    /**
     * Maximum number of adaptive policy ACLs that can be assigned to an adaptive policy in the organization.
     */
    aclsInAPolicy?: number;
    /**
     * Maximum number of user-created adaptive policy groups allowed in the organization.
     */
    customGroups?: number;
    /**
     * Maximum number of policy objects (with the adaptive policy type) allowed in the organization.
     */
    policyObjects?: number;
    /**
     * Maximum number of rules allowed in an adaptive policy ACL in the organization.
     */
    rulesInAnAcl?: number;
}
/**
 * Successful operation
 */
export declare class GetOrganizationAdaptivePolicyOverview200ApplicationJSON extends SpeakeasyBase {
    /**
     * The current amount of various adaptive policy objects.
     */
    counts?: GetOrganizationAdaptivePolicyOverview200ApplicationJSONCounts;
    /**
     * The current limits of various adaptive policy objects.
     */
    limits?: GetOrganizationAdaptivePolicyOverview200ApplicationJSONLimits;
}
export declare class GetOrganizationAdaptivePolicyOverviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationAdaptivePolicyOverview200ApplicationJSONObject?: GetOrganizationAdaptivePolicyOverview200ApplicationJSON;
}
