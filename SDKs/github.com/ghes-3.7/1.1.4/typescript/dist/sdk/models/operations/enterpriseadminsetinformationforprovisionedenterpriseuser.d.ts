import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the SCIM user.
     */
    scimUserId: string;
    user: shared.User;
}
export declare class EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * User was updated
     */
    scimEnterpriseUserResponse?: shared.ScimEnterpriseUserResponse;
    /**
     * Bad request
     */
    scimError?: shared.ScimError;
}
