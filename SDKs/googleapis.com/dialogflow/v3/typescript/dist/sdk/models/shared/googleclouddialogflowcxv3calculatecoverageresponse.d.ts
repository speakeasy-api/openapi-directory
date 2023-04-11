import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3IntentCoverage } from "./googleclouddialogflowcxv3intentcoverage";
import { GoogleCloudDialogflowCxV3TransitionCoverage } from "./googleclouddialogflowcxv3transitioncoverage";
import { GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage } from "./googleclouddialogflowcxv3transitionroutegroupcoverage";
/**
 * The response message for TestCases.CalculateCoverage.
 */
export declare class GoogleCloudDialogflowCxV3CalculateCoverageResponse extends SpeakeasyBase {
    /**
     * The agent to calculate coverage for. Format: `projects//locations//agents/`.
     */
    agent?: string;
    /**
     * Intent coverage represents the percentage of all possible intents in the agent that are triggered in any of a parent's test cases.
     */
    intentCoverage?: GoogleCloudDialogflowCxV3IntentCoverage;
    /**
     * Transition route group coverage represents the percentage of all possible transition routes present within any of a parent's test cases. The results are grouped by the transition route group.
     */
    routeGroupCoverage?: GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage;
    /**
     * Transition coverage represents the percentage of all possible page transitions (page-level transition routes and event handlers, excluding transition route groups) present within any of a parent's test cases.
     */
    transitionCoverage?: GoogleCloudDialogflowCxV3TransitionCoverage;
}
