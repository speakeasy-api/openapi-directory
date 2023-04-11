import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteOrganizationAdaptivePolicyAclRequest extends SpeakeasyBase {
    aclId: string;
    organizationId: string;
}
export declare class DeleteOrganizationAdaptivePolicyAclResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
