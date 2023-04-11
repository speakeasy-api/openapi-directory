import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAuditUserLink } from "./googleanalyticsadminv1alphaaudituserlink";
/**
 * Response message for AuditUserLinks RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaAuditUserLinksResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * List of AuditUserLinks. These will be ordered stably, but in an arbitrary order.
     */
    userLinks?: GoogleAnalyticsAdminV1alphaAuditUserLink[];
}
