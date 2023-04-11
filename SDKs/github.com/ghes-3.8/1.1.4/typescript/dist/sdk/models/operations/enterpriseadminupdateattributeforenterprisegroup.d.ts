import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest extends SpeakeasyBase {
    patchSchema: shared.PatchSchema;
    /**
     * A unique identifier of the SCIM group.
     */
    scimGroupId: string;
}
export declare class EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Success, group was updated
     */
    scimEnterpriseGroupResponse?: shared.ScimEnterpriseGroupResponse;
    /**
     * Bad request
     */
    scimError?: shared.ScimError;
}
