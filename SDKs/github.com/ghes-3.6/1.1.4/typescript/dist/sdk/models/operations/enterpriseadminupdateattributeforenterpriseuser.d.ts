import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminUpdateAttributeForEnterpriseUserRequest extends SpeakeasyBase {
    patchSchema: shared.PatchSchema;
    /**
     * The unique identifier of the SCIM user.
     */
    scimUserId: string;
}
export declare class EnterpriseAdminUpdateAttributeForEnterpriseUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Success, user was updated
     */
    scimEnterpriseUserResponse?: shared.ScimEnterpriseUserResponse;
    /**
     * Bad request
     */
    scimError?: shared.ScimError;
}
