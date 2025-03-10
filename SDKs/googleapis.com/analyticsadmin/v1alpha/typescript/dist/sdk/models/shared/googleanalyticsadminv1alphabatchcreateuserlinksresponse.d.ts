import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaUserLink } from "./googleanalyticsadminv1alphauserlink";
/**
 * Response message for BatchCreateUserLinks RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaBatchCreateUserLinksResponse extends SpeakeasyBase {
    /**
     * The user links created.
     */
    userLinks?: GoogleAnalyticsAdminV1alphaUserLink[];
}
