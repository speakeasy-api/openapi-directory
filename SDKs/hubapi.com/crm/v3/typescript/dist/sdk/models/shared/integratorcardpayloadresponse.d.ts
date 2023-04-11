import { SpeakeasyBase } from "../../../internal/utils";
import { IntegratorObjectResult } from "./integratorobjectresult";
import { TopLevelActions } from "./toplevelactions";
export declare enum IntegratorCardPayloadResponseResponseVersionEnum {
    V1 = "v1",
    V3 = "v3"
}
/**
 * The card details payload, sent to HubSpot by an app in response to a data fetch request when a user visits a CRM record page.
 */
export declare class IntegratorCardPayloadResponse extends SpeakeasyBase {
    /**
     * URL to a page the integrator has built that displays all details for this card. This URL will be displayed to users under a `See more [x]` link if there are more than five items in your response, where `[x]` is the value of `itemLabel`.
     */
    allItemsLinkUrl?: string;
    /**
     * The label to be used for the `allItemsLinkUrl` link (e.g. 'See more tickets'). If not provided, this falls back to the card's title.
     */
    cardLabel?: string;
    responseVersion?: IntegratorCardPayloadResponseResponseVersionEnum;
    /**
     * A list of up to five valid card sub categories.
     */
    sections?: IntegratorObjectResult[];
    topLevelActions?: TopLevelActions;
    /**
     * The total number of card properties that will be sent in this response.
     */
    totalCount: number;
}
