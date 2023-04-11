import { SpeakeasyBase } from "../../../internal/utils";
import { InventoryChange } from "./inventorychange";
/**
 * An object containing the fields to POST for the request.
 *
 * @remarks
 *
 * See the corresponding object definition for field details.
 */
export declare class BatchChangeInventoryRequest extends SpeakeasyBase {
    /**
     * The set of physical counts and inventory adjustments to be made.
     *
     * @remarks
     * Changes are applied based on the client-supplied timestamp and may be sent
     * out of order.
     */
    changes?: InventoryChange[];
    /**
     * A client-supplied, universally unique identifier (UUID) for the
     *
     * @remarks
     * request.
     *
     * See [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) in the
     * [API Development 101](https://developer.squareup.com/docs/basics/api101/overview) section for more
     * information.
     */
    idempotencyKey: string;
    /**
     * Indicates whether the current physical count should be ignored if
     *
     * @remarks
     * the quantity is unchanged since the last physical count. Default: `true`.
     */
    ignoreUnchangedCounts?: boolean;
}
