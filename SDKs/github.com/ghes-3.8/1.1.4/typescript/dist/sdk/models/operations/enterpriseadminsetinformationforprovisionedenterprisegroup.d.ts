import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequest extends SpeakeasyBase {
    group: shared.Group;
    /**
     * A unique identifier of the SCIM group.
     */
    scimGroupId: string;
}
export declare class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Group was updated
     */
    scimEnterpriseGroupResponse?: shared.ScimEnterpriseGroupResponse;
    /**
     * Bad request
     */
    scimError?: shared.ScimError;
}
