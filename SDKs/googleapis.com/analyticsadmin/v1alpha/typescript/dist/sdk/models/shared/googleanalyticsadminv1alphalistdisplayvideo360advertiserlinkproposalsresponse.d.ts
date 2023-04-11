import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal } from "./googleanalyticsadminv1alphadisplayvideo360advertiserlinkproposal";
/**
 * Response message for ListDisplayVideo360AdvertiserLinkProposals RPC.
 */
export declare class GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse extends SpeakeasyBase {
    /**
     * List of DisplayVideo360AdvertiserLinkProposals.
     */
    displayVideo360AdvertiserLinkProposals?: GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
