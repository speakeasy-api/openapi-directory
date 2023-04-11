import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminProvisionEnterpriseUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User has been created
     */
    scimEnterpriseUserResponse?: shared.ScimEnterpriseUserResponse;
    /**
     * Bad request
     */
    scimError?: shared.ScimError;
}
