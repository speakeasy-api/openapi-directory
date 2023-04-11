import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCardV1OnClick } from "./googleappscardv1onclick";
/**
 * A card action is the action associated with the card. For example, an invoice card might include actions such as delete invoice, email invoice, or open the invoice in a browser. Not supported by Chat apps.
 */
export declare class GoogleAppsCardV1CardAction extends SpeakeasyBase {
    /**
     * The label that displays as the action menu item.
     */
    actionLabel?: string;
    /**
     * Represents how to respond when users click an interactive element on a card, such as a button.
     */
    onClick?: GoogleAppsCardV1OnClick;
}
