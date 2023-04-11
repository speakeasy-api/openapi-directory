import { SpeakeasyBase } from "../../../internal/utils";
import { CancellationFee } from "./cancellationfee";
/**
 * A rule that applies if the booking is cancelled.
 */
export declare class CancellationPolicy extends SpeakeasyBase {
    /**
     * The time (in the hotel's local timezone) at which the policy takes effect, in ISO 8601 format. If omitted, the policy applies open-ended until the guests' stay.
     */
    end?: string;
    /**
     * Describes the costs associated with a cancellation and how it is calculated.
     */
    fee: CancellationFee;
    /**
     * Human-readable plain English cancellation policy information, ready to be shown to your guests.
     */
    formatted: string;
    /**
     * The time (in the hotel's local timezone) at which the policy takes effect, in ISO 8601 format. If omitted, the policy is already in effect.
     */
    start: string;
}
