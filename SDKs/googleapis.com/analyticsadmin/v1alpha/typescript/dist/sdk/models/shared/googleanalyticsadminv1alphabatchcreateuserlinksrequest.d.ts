import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput } from "./googleanalyticsadminv1alphacreateuserlinkrequest";
/**
 * Request message for BatchCreateUserLinks RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequestInput extends SpeakeasyBase {
    /**
     * Optional. If set, then email the new users notifying them that they've been granted permissions to the resource. Regardless of whether this is set or not, notify_new_user field inside each individual request is ignored.
     */
    notifyNewUsers?: boolean;
    /**
     * Required. The requests specifying the user links to create. A maximum of 1000 user links can be created in a batch.
     */
    requests?: GoogleAnalyticsAdminV1alphaCreateUserLinkRequestInput[];
}
