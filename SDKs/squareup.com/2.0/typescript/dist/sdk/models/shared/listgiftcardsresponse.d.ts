import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { GiftCard } from "./giftcard";
/**
 * A response that contains one or more `GiftCard`. The response might contain a set of `Error`
 *
 * @remarks
 * objects if the request resulted in errors.
 */
export declare class ListGiftCardsResponse extends SpeakeasyBase {
    /**
     * When a response is truncated, it includes a cursor that you can use in a
     *
     * @remarks
     * subsequent request to fetch the next set of gift cards. If empty, this is
     * the final response.
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * Gift cards retrieved.
     */
    giftCards?: GiftCard[];
}
