import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminUnsuspendUserRequestBody extends SpeakeasyBase {
    /**
     * The reason the user is being unsuspended. This message will be logged in the [audit log](https://docs.github.com/enterprise-server@3.3/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise). If you don't provide a `reason`, it will default to "Unsuspended via API by _SITE\_ADMINISTRATOR_", where _SITE\_ADMINISTRATOR_ is the person who performed the action.
     */
    reason?: string;
}
export declare class EnterpriseAdminUnsuspendUserRequest extends SpeakeasyBase {
    requestBody?: EnterpriseAdminUnsuspendUserRequestBody;
    /**
     * The handle for the GitHub user account.
     */
    username: string;
}
export declare class EnterpriseAdminUnsuspendUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
