import { SpeakeasyBase } from "../../../internal/utils";
import { GiftCardActivity } from "./giftcardactivity";
/**
 * A request to create a gift card activity.
 */
export declare class CreateGiftCardActivityRequest extends SpeakeasyBase {
    /**
     * Represents an action performed on a gift card that affects its state or balance.
     */
    giftCardActivity: GiftCardActivity;
    /**
     * A unique string that identifies the `CreateGiftCardActivity` request.
     */
    idempotencyKey: string;
}
