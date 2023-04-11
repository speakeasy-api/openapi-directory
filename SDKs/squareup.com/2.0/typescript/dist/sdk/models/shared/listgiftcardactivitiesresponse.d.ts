import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { GiftCardActivity } from "./giftcardactivity";
/**
 * A response that contains one or more `GiftCardActivity`. The response might contain a set of `Error` objects
 *
 * @remarks
 * if the request resulted in errors.
 */
export declare class ListGiftCardActivitiesResponse extends SpeakeasyBase {
    /**
     * When a response is truncated, it includes a cursor that you can use in a
     *
     * @remarks
     * subsequent request to fetch the next set of activities. If empty, this is
     * the final response.
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * Gift card activities retrieved.
     */
    giftCardActivities?: GiftCardActivity[];
}
