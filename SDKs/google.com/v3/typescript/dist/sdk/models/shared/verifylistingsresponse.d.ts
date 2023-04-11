import { SpeakeasyBase } from "../../../internal/utils";
import { ParsedListing } from "./parsedlisting";
/**
 * Response message for VRPartnerListingVerificationService.VerifyPartnerListings.
 */
export declare class VerifyListingsResponse extends SpeakeasyBase {
    /**
     * A parsed listing
     */
    parsedListing?: ParsedListing;
}
