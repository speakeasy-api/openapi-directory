import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminGetProvisioningInformationForEnterpriseUserRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the SCIM user.
     */
    scimUserId: string;
}
export declare class EnterpriseAdminGetProvisioningInformationForEnterpriseUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Success, a user was found
     */
    scimEnterpriseUserResponse?: shared.ScimEnterpriseUserResponse;
    /**
     * Bad request
     */
    scimError?: shared.ScimError;
}
