import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { GiftCardActivity } from "./giftcardactivity";
/**
 * A response that contains a `GiftCardActivity` that was created.
 *
 * @remarks
 * The response might contain a set of `Error` objects if the request resulted in errors.
 */
export declare class CreateGiftCardActivityResponse extends SpeakeasyBase {
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * Represents an action performed on a gift card that affects its state or balance.
     */
    giftCardActivity?: GiftCardActivity;
}
