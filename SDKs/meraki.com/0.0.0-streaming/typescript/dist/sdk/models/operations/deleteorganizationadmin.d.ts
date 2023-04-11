import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteOrganizationAdminRequest extends SpeakeasyBase {
    adminId: string;
    organizationId: string;
}
export declare class DeleteOrganizationAdminResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
