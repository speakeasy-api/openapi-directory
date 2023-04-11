import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupRequest extends SpeakeasyBase {
    /**
     * Excludes the specified attribute from being returned in the results. Using this parameter can speed up response time.
     */
    excludedAttributes?: string;
    /**
     * A unique identifier of the SCIM group.
     */
    scimGroupId: string;
}
export declare class EnterpriseAdminGetProvisioningInformationForEnterpriseGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Success, a group was found
     */
    scimEnterpriseGroupResponse?: shared.ScimEnterpriseGroupResponse;
    /**
     * Bad request
     */
    scimError?: shared.ScimError;
}
