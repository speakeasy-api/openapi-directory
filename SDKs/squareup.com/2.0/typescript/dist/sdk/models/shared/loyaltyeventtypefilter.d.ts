import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Filter events by event type.
 */
export declare class LoyaltyEventTypeFilter extends SpeakeasyBase {
    /**
     * The loyalty event types used to filter the result.
     *
     * @remarks
     * If multiple values are specified, the endpoint uses a
     * logical OR to combine them.
     */
    types: string[];
}
