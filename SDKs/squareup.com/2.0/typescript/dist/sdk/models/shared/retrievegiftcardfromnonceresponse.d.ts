import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { GiftCard } from "./giftcard";
/**
 * A response that contains a `GiftCard`. The response might contain a set of `Error` objects
 *
 * @remarks
 * if the request resulted in errors.
 */
export declare class RetrieveGiftCardFromNonceResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * Represents a Square gift card.
     */
    giftCard?: GiftCard;
}
