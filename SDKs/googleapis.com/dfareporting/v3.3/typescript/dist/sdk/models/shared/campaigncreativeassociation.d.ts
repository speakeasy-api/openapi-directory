import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifies a creative which has been associated with a given campaign.
 */
export declare class CampaignCreativeAssociation extends SpeakeasyBase {
    /**
     * ID of the creative associated with the campaign. This is a required field.
     */
    creativeId?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#campaignCreativeAssociation".
     */
    kind?: string;
}
