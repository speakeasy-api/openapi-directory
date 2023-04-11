import { SpeakeasyBase } from "../../../internal/utils";
import { Conditions } from "./conditions";
import { RateAdjustment } from "./rateadjustment";
import { RateComponent } from "./ratecomponent";
import { RatePlanRestrictions } from "./rateplanrestrictions";
import { RatePlanRoomType } from "./rateplanroomtype";
/**
 * Rate plan encapsulates rates given a set of internal conditions like cancellation policy or meal plan.
 */
export declare class RatePlan extends SpeakeasyBase {
    /**
     * A list of adjustments that could apply to this rate.
     */
    adjustments?: RateAdjustment[];
    components?: RateComponent[];
    /**
     * Conditions described by the rate plan.
     */
    conditions: Conditions;
    /**
     * Human-readable summary describing this rate plan.
     */
    description: string;
    /**
     * The unique identifier of the hotel this rate plan is available for.
     */
    hotelId: string;
    /**
     * The integer identifier of this rate plan.
     */
    ratePlanId: number;
    /**
     * Restrictions that apply to this rate plan.
     */
    restrictions: RatePlanRestrictions;
    /**
     * A list of room types this rate plan is bookable for.
     */
    roomTypes: RatePlanRoomType[];
}
