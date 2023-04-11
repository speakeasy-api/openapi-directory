import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminCreateUserRequestBody extends SpeakeasyBase {
    /**
     * **Required for built-in authentication.** The user's email
     *
     * @remarks
     * address. This parameter can be omitted when using CAS, LDAP, or SAML.
     * For more information, see "[About authentication for your enterprise](https://docs.github.com/enterprise-server@3.8/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise)."
     */
    email?: string;
    /**
     * The user's username.
     */
    login: string;
}
export declare class EnterpriseAdminCreateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    simpleUser?: shared.SimpleUser;
}
