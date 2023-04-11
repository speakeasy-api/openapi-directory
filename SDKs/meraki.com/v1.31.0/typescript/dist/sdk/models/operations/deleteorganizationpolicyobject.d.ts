import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteOrganizationPolicyObjectRequest extends SpeakeasyBase {
    organizationId: string;
    policyObjectId: string;
}
export declare class DeleteOrganizationPolicyObjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
