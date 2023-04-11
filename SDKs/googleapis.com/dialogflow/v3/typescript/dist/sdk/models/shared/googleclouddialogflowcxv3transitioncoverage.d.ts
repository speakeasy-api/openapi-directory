import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3TransitionCoverageTransition } from "./googleclouddialogflowcxv3transitioncoveragetransition";
/**
 * Transition coverage represents the percentage of all possible page transitions (page-level transition routes and event handlers, excluding transition route groups) present within any of a parent's test cases.
 */
export declare class GoogleCloudDialogflowCxV3TransitionCoverage extends SpeakeasyBase {
    /**
     * The percent of transitions in the agent that are covered.
     */
    coverageScore?: number;
    /**
     * The list of Transitions present in the agent.
     */
    transitions?: GoogleCloudDialogflowCxV3TransitionCoverageTransition[];
}
