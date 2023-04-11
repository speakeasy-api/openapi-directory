import { SpeakeasyBase } from "../../../internal/utils";
import { CardObjectTypeBody } from "./cardobjecttypebody";
/**
 * Configuration for this card's data fetch request.
 */
export declare class CardFetchBody extends SpeakeasyBase {
    /**
     * An array of CRM object types where this card should be displayed. HubSpot will call your data fetch URL whenever a user visits a record page of the types defined here.
     */
    objectTypes: CardObjectTypeBody[];
    /**
     * URL to a service endpoints that will respond with card details. HubSpot will call this endpoint each time a user visits a CRM record page where this card should be displayed.
     */
    targetUrl: string;
}
