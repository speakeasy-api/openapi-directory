import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { GiftCard } from "./giftcard";
/**
 * A response that contains one `GiftCard` that was unlinked. The response might contain a set of `Error`
 *
 * @remarks
 * objects if the request resulted in errors.
 */
export declare class UnlinkCustomerFromGiftCardResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * Represents a Square gift card.
     */
    giftCard?: GiftCard;
}
