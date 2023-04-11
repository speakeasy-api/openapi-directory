import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminCreateImpersonationOAuthTokenRequestBody extends SpeakeasyBase {
    /**
     * A list of [scopes](https://docs.github.com/github-ae@latest/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
     */
    scopes: string[];
}
export declare class EnterpriseAdminCreateImpersonationOAuthTokenRequest extends SpeakeasyBase {
    requestBody: EnterpriseAdminCreateImpersonationOAuthTokenRequestBody;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
}
export declare class EnterpriseAdminCreateImpersonationOAuthTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response when getting an existing impersonation OAuth token
     */
    authorization?: shared.Authorization;
}
