import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminProvisionEnterpriseGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Group has been created
     */
    scimEnterpriseGroupResponse?: shared.ScimEnterpriseGroupResponse;
    /**
     * Bad request
     */
    scimError?: shared.ScimError;
}
