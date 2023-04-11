import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for AuditUserLinks RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaAuditUserLinksRequest extends SpeakeasyBase {
    /**
     * The maximum number of user links to return. The service may return fewer than this value. If unspecified, at most 1000 user links will be returned. The maximum value is 5000; values above 5000 will be coerced to 5000.
     */
    pageSize?: number;
    /**
     * A page token, received from a previous `AuditUserLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `AuditUserLinks` must match the call that provided the page token.
     */
    pageToken?: string;
}
