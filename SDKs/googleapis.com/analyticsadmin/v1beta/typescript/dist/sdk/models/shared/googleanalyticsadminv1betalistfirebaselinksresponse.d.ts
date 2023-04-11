import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaFirebaseLink } from "./googleanalyticsadminv1betafirebaselink";
/**
 * Response message for ListFirebaseLinks RPC
 */
export declare class GoogleAnalyticsAdminV1betaListFirebaseLinksResponse extends SpeakeasyBase {
    /**
     * List of FirebaseLinks. This will have at most one value.
     */
    firebaseLinks?: GoogleAnalyticsAdminV1betaFirebaseLink[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. Currently, Google Analytics supports only one FirebaseLink per property, so this will never be populated.
     */
    nextPageToken?: string;
}
