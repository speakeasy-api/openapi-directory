import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteOrganizationSamlRoleRequest extends SpeakeasyBase {
    organizationId: string;
    samlRoleId: string;
}
export declare class DeleteOrganizationSamlRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
