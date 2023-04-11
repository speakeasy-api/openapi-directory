import { SpeakeasyBase } from "../../../internal/utils";
import { SiteInput } from "./site";
/**
 * Request message for SiteService.BulkEditSites.
 */
export declare class BulkEditSitesRequestInput extends SpeakeasyBase {
    /**
     * The ID of the advertiser that owns the parent channel.
     */
    advertiserId?: string;
    /**
     * The sites to create in batch, specified as a list of Sites.
     */
    createdSites?: SiteInput[];
    /**
     * The sites to delete in batch, specified as a list of site url_or_app_ids.
     */
    deletedSites?: string[];
    /**
     * The ID of the partner that owns the parent channel.
     */
    partnerId?: string;
}
