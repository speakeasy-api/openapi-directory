import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1betaFirebaseLink } from "./googleanalyticsadminv1betafirebaselink";
/**
 * Response message for ListFirebaseLinks RPC
**/
export declare class GoogleAnalyticsAdminV1betaListFirebaseLinksResponse extends SpeakeasyBase {
    firebaseLinks?: GoogleAnalyticsAdminV1betaFirebaseLink[];
    nextPageToken?: string;
}
