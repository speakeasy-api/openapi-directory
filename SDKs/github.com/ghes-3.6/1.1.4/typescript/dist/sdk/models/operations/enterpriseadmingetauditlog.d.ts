import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminGetAuditLogRequest extends SpeakeasyBase {
    /**
     * A cursor, as given in the [Link header](https://docs.github.com/enterprise-server@3.6/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events after this cursor.
     */
    after?: string;
    /**
     * A cursor, as given in the [Link header](https://docs.github.com/enterprise-server@3.6/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events before this cursor.
     */
    before?: string;
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
    /**
     * The event types to include:
     *
     * @remarks
     *
     * - `web` - returns web (non-Git) events.
     * - `git` - returns Git events.
     * - `all` - returns both web and Git events.
     *
     * The default is `web`.
     */
    include?: shared.AuditLogIncludeEnum;
    /**
     * The order of audit log events. To list newest events first, specify `desc`. To list oldest events first, specify `asc`.
     *
     * @remarks
     *
     * The default is `desc`.
     */
    order?: shared.AuditLogOrderEnum;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * A search phrase. For more information, see [Searching the audit log](https://docs.github.com/enterprise-server@3.6/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise#searching-the-audit-log).
     */
    phrase?: string;
}
export declare class EnterpriseAdminGetAuditLogResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    auditLogEvents?: shared.AuditLogEvent[];
}
