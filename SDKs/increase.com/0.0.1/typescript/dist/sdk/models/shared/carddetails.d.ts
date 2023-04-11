import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A constant representing the object's type. For this resource it will always be `card_details`.
 */
export declare enum CardDetailsTypeEnum {
    CardDetails = "card_details"
}
/**
 * An object containing the sensitive details (card number, cvc, etc) for a Card.
 */
export declare class CardDetails extends SpeakeasyBase {
    /**
     * The identifier for the Card for which sensitive details have been returned.
     */
    cardId: string;
    /**
     * The month the card expires in M format (e.g., August is 8).
     */
    expirationMonth: number;
    /**
     * The year the card expires in YYYY format (e.g., 2025).
     */
    expirationYear: number;
    /**
     * The card number.
     */
    primaryAccountNumber: string;
    /**
     * A constant representing the object's type. For this resource it will always be `card_details`.
     */
    type: CardDetailsTypeEnum;
    /**
     * The three-digit verification code for the card. It's also known as the Card Verification Code (CVC), the Card Verification Value (CVV), or the Card Identification (CID).
     */
    verificationCode: string;
}
