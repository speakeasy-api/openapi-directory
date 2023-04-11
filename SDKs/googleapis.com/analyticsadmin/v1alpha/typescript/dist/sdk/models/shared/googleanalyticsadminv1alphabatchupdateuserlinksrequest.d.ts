import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaUpdateUserLinkRequestInput } from "./googleanalyticsadminv1alphaupdateuserlinkrequest";
/**
 * Request message for BatchUpdateUserLinks RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequestInput extends SpeakeasyBase {
    /**
     * Required. The requests specifying the user links to update. A maximum of 1000 user links can be updated in a batch.
     */
    requests?: GoogleAnalyticsAdminV1alphaUpdateUserLinkRequestInput[];
}
