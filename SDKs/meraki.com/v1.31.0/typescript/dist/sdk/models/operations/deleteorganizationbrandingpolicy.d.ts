import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteOrganizationBrandingPolicyRequest extends SpeakeasyBase {
    brandingPolicyId: string;
    organizationId: string;
}
export declare class DeleteOrganizationBrandingPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
