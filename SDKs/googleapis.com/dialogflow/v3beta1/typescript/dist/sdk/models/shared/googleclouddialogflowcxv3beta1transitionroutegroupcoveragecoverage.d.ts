import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1TransitionRouteGroup } from "./googleclouddialogflowcxv3beta1transitionroutegroup";
import { GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition } from "./googleclouddialogflowcxv3beta1transitionroutegroupcoveragecoveragetransition";
/**
 * Coverage result message for one transition route group.
 */
export declare class GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage extends SpeakeasyBase {
    /**
     * The percent of transition routes in the transition route group that are covered.
     */
    coverageScore?: number;
    /**
     * An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
     */
    routeGroup?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroup;
    /**
     * The list of transition routes and coverage in the transition route group.
     */
    transitions?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition[];
}
