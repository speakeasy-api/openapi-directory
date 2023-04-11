import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Filter events by location.
 */
export declare class LoyaltyEventLocationFilter extends SpeakeasyBase {
    /**
     * The [location](https://developer.squareup.com/reference/square_2021-08-18/objects/Location) IDs for loyalty events to query.
     *
     * @remarks
     * If multiple values are specified, the endpoint uses
     * a logical OR to combine them.
     */
    locationIds: string[];
}
