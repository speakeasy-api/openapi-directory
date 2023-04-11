import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaFirebaseLink } from "./googleanalyticsadminv1alphafirebaselink";
/**
 * Response message for ListFirebaseLinks RPC
 */
export declare class GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse extends SpeakeasyBase {
    /**
     * List of FirebaseLinks. This will have at most one value.
     */
    firebaseLinks?: GoogleAnalyticsAdminV1alphaFirebaseLink[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. Currently, Google Analytics supports only one FirebaseLink per property, so this will never be populated.
     */
    nextPageToken?: string;
}
