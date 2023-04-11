import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteOrganizationAdaptivePolicyGroupRequest extends SpeakeasyBase {
    id: string;
    organizationId: string;
}
export declare class DeleteOrganizationAdaptivePolicyGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
