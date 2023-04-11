import { SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";
import { CriteriaTargeting } from "./criteriatargeting";
import { InventorySizeTargeting } from "./inventorysizetargeting";
import { Money } from "./money";
import { PreferredDealTerms } from "./preferreddealterms";
import { ProgrammaticGuaranteedTerms } from "./programmaticguaranteedterms";
/**
 * Request to send an RFP. All fields in this request are proposed to publisher and subject to changes by publisher during later negotiation.
 */
export declare class SendRfpRequest extends SpeakeasyBase {
    /**
     * Contact information for the buyer.
     */
    buyerContacts?: Contact[];
    /**
     * If the current buyer is sending the RFP on behalf of its client, use this field to specify the name of the client in the format: `buyers/{accountId}/clients/{clientAccountid}`.
     */
    client?: string;
    /**
     * Required. The display name of the proposal being created by this RFP.
     */
    displayName?: string;
    /**
     * Represents an amount of money with its currency type.
     */
    estimatedGrossSpend?: Money;
    /**
     * Required. Proposed flight end time of the RFP. A timestamp in RFC3339 UTC "Zulu" format. Note that the specified value will be truncated to a granularity of one second.
     */
    flightEndTime?: string;
    /**
     * Required. Proposed flight start time of the RFP. A timestamp in RFC3339 UTC "Zulu" format. Note that the specified value will be truncated to a granularity of one second.
     */
    flightStartTime?: string;
    /**
     * Generic targeting used for targeting dimensions that contains a list of included and excluded numeric IDs. This cannot be filtered using list filter syntax.
     */
    geoTargeting?: CriteriaTargeting;
    /**
     * Represents the size of an ad unit that can be targeted on a bid request.
     */
    inventorySizeTargeting?: InventorySizeTargeting;
    /**
     * A message that is sent to the publisher. Maximum length is 1024 characters.
     */
    note?: string;
    /**
     * Pricing terms for Preferred Deals.
     */
    preferredDealTerms?: PreferredDealTerms;
    /**
     * Pricing terms for Programmatic Guaranteed Deals.
     */
    programmaticGuaranteedTerms?: ProgrammaticGuaranteedTerms;
    /**
     * Required. The profile of the publisher who will receive this RFP in the format: `buyers/{accountId}/publisherProfiles/{publisherProfileId}`.
     */
    publisherProfile?: string;
}
