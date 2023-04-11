import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The association between a creative and a deal.
 */
export declare class CreativeDealAssociation extends SpeakeasyBase {
    /**
     * The account the creative belongs to.
     */
    accountId?: string;
    /**
     * The ID of the creative associated with the deal.
     */
    creativeId?: string;
    /**
     * The externalDealId for the deal associated with the creative.
     */
    dealsId?: string;
}
