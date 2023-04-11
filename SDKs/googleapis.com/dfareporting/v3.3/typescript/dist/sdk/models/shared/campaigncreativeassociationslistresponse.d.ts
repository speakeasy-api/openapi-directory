import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignCreativeAssociation } from "./campaigncreativeassociation";
/**
 * Campaign Creative Association List Response
 */
export declare class CampaignCreativeAssociationsListResponse extends SpeakeasyBase {
    /**
     * Campaign creative association collection
     */
    campaignCreativeAssociations?: CampaignCreativeAssociation[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignCreativeAssociationsListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
}
