import { SpeakeasyBase } from "../../../internal/utils";
import { GiftCard } from "./giftcard";
/**
 * A request to create a gift card.
 */
export declare class CreateGiftCardRequest extends SpeakeasyBase {
    /**
     * Represents a Square gift card.
     */
    giftCard: GiftCard;
    /**
     * A unique string that identifies the `CreateGiftCard` request.
     */
    idempotencyKey: string;
    /**
     * The location ID where the gift card that will be created should be registered.
     */
    locationId: string;
}
