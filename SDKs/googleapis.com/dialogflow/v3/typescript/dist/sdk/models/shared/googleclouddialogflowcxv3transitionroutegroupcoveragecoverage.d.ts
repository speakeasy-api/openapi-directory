import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3TransitionRouteGroup } from "./googleclouddialogflowcxv3transitionroutegroup";
import { GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition } from "./googleclouddialogflowcxv3transitionroutegroupcoveragecoveragetransition";
/**
 * Coverage result message for one transition route group.
 */
export declare class GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage extends SpeakeasyBase {
    /**
     * The percent of transition routes in the transition route group that are covered.
     */
    coverageScore?: number;
    /**
     * An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
     */
    routeGroup?: GoogleCloudDialogflowCxV3TransitionRouteGroup;
    /**
     * The list of transition routes and coverage in the transition route group.
     */
    transitions?: GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition[];
}
