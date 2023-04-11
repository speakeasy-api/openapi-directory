import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for VRPartnerListingVerificationService.VerifyPartnerListings.
 */
export declare class VerifyListingsRequest extends SpeakeasyBase {
    /**
     * A listing that follows the XML format specified in https://developers.google.com/hotels/hotel-prices/xml-reference/hotel-list-feed.
     */
    xmlListing?: string;
}
