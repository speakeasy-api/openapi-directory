import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects extends SpeakeasyBase {
    /**
     * The ID of the policy object
     */
    id?: string;
    /**
     * The name of the policy object
     */
    name?: string;
}
export declare class CreateOrganizationAdaptivePolicyGroupRequestBody extends SpeakeasyBase {
    /**
     * Description of the group (default: "")
     */
    description?: string;
    /**
     * Name of the group
     */
    name: string;
    /**
     * The policy objects that belong to this group; traffic from addresses specified by these policy objects will be tagged with this group's SGT value if no other tagging scheme is being used (each requires one unique attribute) (default: [])
     */
    policyObjects?: CreateOrganizationAdaptivePolicyGroupRequestBodyPolicyObjects[];
    /**
     * SGT value of the group
     */
    sgt: number;
}
export declare class CreateOrganizationAdaptivePolicyGroupRequest extends SpeakeasyBase {
    requestBody: CreateOrganizationAdaptivePolicyGroupRequestBody;
    organizationId: string;
}
export declare class CreateOrganizationAdaptivePolicyGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createOrganizationAdaptivePolicyGroup201ApplicationJSONObject?: Record<string, any>;
}
