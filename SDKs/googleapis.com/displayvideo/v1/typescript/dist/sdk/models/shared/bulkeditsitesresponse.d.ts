import { SpeakeasyBase } from "../../../internal/utils";
import { Site } from "./site";
/**
 * Response message for SiteService.BulkEditSites.
 */
export declare class BulkEditSitesResponse extends SpeakeasyBase {
    /**
     * The list of sites that have been successfully created. This list will be absent if empty.
     */
    sites?: Site[];
}
