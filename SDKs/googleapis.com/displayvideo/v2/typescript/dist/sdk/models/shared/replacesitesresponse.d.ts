import { SpeakeasyBase } from "../../../internal/utils";
import { Site } from "./site";
/**
 * Response message for SiteService.ReplaceSites.
 */
export declare class ReplaceSitesResponse extends SpeakeasyBase {
    /**
     * The list of sites in the channel after replacing.
     */
    sites?: Site[];
}
