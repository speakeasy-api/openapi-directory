import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage } from "./googleclouddialogflowcxv3transitionroutegroupcoveragecoverage";
/**
 * Transition route group coverage represents the percentage of all possible transition routes present within any of a parent's test cases. The results are grouped by the transition route group.
 */
export declare class GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage extends SpeakeasyBase {
    /**
     * The percent of transition routes in all the transition route groups that are covered.
     */
    coverageScore?: number;
    /**
     * Transition route group coverages.
     */
    coverages?: GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage[];
}
