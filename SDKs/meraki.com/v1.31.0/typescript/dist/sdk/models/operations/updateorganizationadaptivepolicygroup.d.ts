import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects extends SpeakeasyBase {
    /**
     * The ID of the policy object
     */
    id?: string;
    /**
     * The name of the policy object
     */
    name?: string;
}
export declare class UpdateOrganizationAdaptivePolicyGroupRequestBody extends SpeakeasyBase {
    /**
     * Description of the group
     */
    description?: string;
    /**
     * Name of the group
     */
    name?: string;
    /**
     * The policy objects that belong to this group; traffic from addresses specified by these policy objects will be tagged with this group's SGT value if no other tagging scheme is being used (each requires one unique attribute)
     */
    policyObjects?: UpdateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects[];
    /**
     * SGT value of the group
     */
    sgt?: number;
}
export declare class UpdateOrganizationAdaptivePolicyGroupRequest extends SpeakeasyBase {
    requestBody?: UpdateOrganizationAdaptivePolicyGroupRequestBody;
    id: string;
    organizationId: string;
}
export declare class UpdateOrganizationAdaptivePolicyGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganizationAdaptivePolicyGroup200ApplicationJSONObject?: Record<string, any>;
}
