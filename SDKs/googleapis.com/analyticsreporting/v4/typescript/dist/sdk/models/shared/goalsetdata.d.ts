import { SpeakeasyBase } from "../../../internal/utils";
import { GoalData } from "./goaldata";
/**
 * Represents a set of goals that were reached in an activity.
 */
export declare class GoalSetData extends SpeakeasyBase {
    /**
     * All the goals that were reached in the current activity.
     */
    goals?: GoalData[];
}
