import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteOrganizationPolicyObjectsGroupRequest extends SpeakeasyBase {
    organizationId: string;
    policyObjectGroupId: string;
}
export declare class DeleteOrganizationPolicyObjectsGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
