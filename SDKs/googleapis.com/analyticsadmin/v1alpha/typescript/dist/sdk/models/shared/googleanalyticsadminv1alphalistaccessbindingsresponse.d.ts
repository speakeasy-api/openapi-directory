import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaAccessBinding } from "./googleanalyticsadminv1alphaaccessbinding";
/**
 * Response message for ListAccessBindings RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaListAccessBindingsResponse extends SpeakeasyBase {
    /**
     * List of AccessBindings. These will be ordered stably, but in an arbitrary order.
     */
    accessBindings?: GoogleAnalyticsAdminV1alphaAccessBinding[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
