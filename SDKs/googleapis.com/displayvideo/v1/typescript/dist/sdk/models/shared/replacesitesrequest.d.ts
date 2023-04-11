import { SpeakeasyBase } from "../../../internal/utils";
import { SiteInput } from "./site";
/**
 * Request message for SiteService.ReplaceSites.
 */
export declare class ReplaceSitesRequestInput extends SpeakeasyBase {
    /**
     * The ID of the advertiser that owns the parent channel.
     */
    advertiserId?: string;
    /**
     * The sites that will replace the existing sites assigned to the channel, specified as a list of Sites.
     */
    newSites?: SiteInput[];
    /**
     * The ID of the partner that owns the parent channel.
     */
    partnerId?: string;
}
