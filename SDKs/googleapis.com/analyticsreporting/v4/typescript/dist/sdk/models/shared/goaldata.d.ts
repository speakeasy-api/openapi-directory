import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents all the details pertaining to a goal.
 */
export declare class GoalData extends SpeakeasyBase {
    /**
     * URL of the page where this goal was completed.
     */
    goalCompletionLocation?: string;
    /**
     * Total number of goal completions in this activity.
     */
    goalCompletions?: string;
    /**
     * This identifies the goal as configured for the profile.
     */
    goalIndex?: number;
    /**
     * Name of the goal.
     */
    goalName?: string;
    /**
     * URL of the page one step prior to the goal completion.
     */
    goalPreviousStep1?: string;
    /**
     * URL of the page two steps prior to the goal completion.
     */
    goalPreviousStep2?: string;
    /**
     * URL of the page three steps prior to the goal completion.
     */
    goalPreviousStep3?: string;
    /**
     * Value in this goal.
     */
    goalValue?: number;
}
