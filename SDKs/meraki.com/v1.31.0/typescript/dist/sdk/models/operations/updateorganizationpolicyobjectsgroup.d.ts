import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateOrganizationPolicyObjectsGroupRequestBody extends SpeakeasyBase {
    /**
     * A name for the group of network addresses, unique within the organization (alphanumeric, space, dash, or underscore characters only)
     */
    name?: string;
    /**
     * A list of Policy Object ID's that this NetworkObjectGroup should be associated to (note: these ID's will replace the existing associated Policy Objects)
     */
    objectIds?: number[];
}
export declare class UpdateOrganizationPolicyObjectsGroupRequest extends SpeakeasyBase {
    requestBody?: UpdateOrganizationPolicyObjectsGroupRequestBody;
    organizationId: string;
    policyObjectGroupId: string;
}
export declare class UpdateOrganizationPolicyObjectsGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateOrganizationPolicyObjectsGroup200ApplicationJSONObject?: Record<string, any>;
}
