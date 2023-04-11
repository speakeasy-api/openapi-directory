import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest } from "./googleanalyticsadminv1alphadeleteuserlinkrequest";
/**
 * Request message for BatchDeleteUserLinks RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest extends SpeakeasyBase {
    /**
     * Required. The requests specifying the user links to update. A maximum of 1000 user links can be updated in a batch.
     */
    requests?: GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest[];
}
