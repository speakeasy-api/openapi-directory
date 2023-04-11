import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specific details for curbside pickup.
 */
export declare class OrderFulfillmentPickupDetailsCurbsidePickupDetails extends SpeakeasyBase {
    /**
     * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates)
     *
     * @remarks
     * indicating when the buyer arrived and is waiting for pickup. The timestamp must be in RFC 3339 format
     * (for example, "2016-09-04T23:59:33.123Z").
     */
    buyerArrivedAt?: string;
    /**
     * Specific details for curbside pickup, such as parking number and vehicle model.
     */
    curbsideDetails?: string;
}
