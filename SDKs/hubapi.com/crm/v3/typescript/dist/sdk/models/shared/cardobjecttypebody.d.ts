import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A CRM object type where this card should be displayed.
 */
export declare enum CardObjectTypeBodyNameEnum {
    Contacts = "contacts",
    Deals = "deals",
    Companies = "companies",
    Tickets = "tickets"
}
export declare class CardObjectTypeBody extends SpeakeasyBase {
    /**
     * A CRM object type where this card should be displayed.
     */
    name: CardObjectTypeBodyNameEnum;
    /**
     * An array of properties that should be sent to this card's target URL when the data fetch request is made. Must be valid properties for the corresponding CRM object type.
     */
    propertiesToSend: string[];
}
