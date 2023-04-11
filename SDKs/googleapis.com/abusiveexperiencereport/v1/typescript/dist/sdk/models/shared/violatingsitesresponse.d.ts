import { SpeakeasyBase } from "../../../internal/utils";
import { SiteSummaryResponse } from "./sitesummaryresponse";
/**
 * Response message for ListViolatingSites.
 */
export declare class ViolatingSitesResponse extends SpeakeasyBase {
    /**
     * The list of violating sites.
     */
    violatingSites?: SiteSummaryResponse[];
}
