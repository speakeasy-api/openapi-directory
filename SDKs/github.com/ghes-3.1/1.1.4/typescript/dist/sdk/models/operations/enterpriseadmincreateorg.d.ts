import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminCreateOrgRequestBody extends SpeakeasyBase {
    /**
     * The login of the user who will manage this organization.
     */
    admin: string;
    /**
     * The organization's username.
     */
    login: string;
    /**
     * The organization's display name.
     */
    profileName?: string;
}
export declare class EnterpriseAdminCreateOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    organizationSimple?: shared.OrganizationSimple;
}
