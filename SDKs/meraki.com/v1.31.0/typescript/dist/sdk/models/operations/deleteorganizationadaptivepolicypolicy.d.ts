import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteOrganizationAdaptivePolicyPolicyRequest extends SpeakeasyBase {
    id: string;
    organizationId: string;
}
export declare class DeleteOrganizationAdaptivePolicyPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
