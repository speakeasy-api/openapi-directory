import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3TransitionRoute, GoogleCloudDialogflowCxV3TransitionRouteInput } from "./googleclouddialogflowcxv3transitionroute";
/**
 * An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
 */
export declare class GoogleCloudDialogflowCxV3TransitionRouteGroup extends SpeakeasyBase {
    /**
     * Required. The human-readable name of the transition route group, unique within the flow. The display name can be no longer than 30 characters.
     */
    displayName?: string;
    /**
     * The unique identifier of the transition route group. TransitionRouteGroups.CreateTransitionRouteGroup populates the name automatically. Format: `projects//locations//agents//flows//transitionRouteGroups/`.
     */
    name?: string;
    /**
     * Transition routes associated with the TransitionRouteGroup.
     */
    transitionRoutes?: GoogleCloudDialogflowCxV3TransitionRoute[];
}
/**
 * An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
 */
export declare class GoogleCloudDialogflowCxV3TransitionRouteGroupInput extends SpeakeasyBase {
    /**
     * Required. The human-readable name of the transition route group, unique within the flow. The display name can be no longer than 30 characters.
     */
    displayName?: string;
    /**
     * The unique identifier of the transition route group. TransitionRouteGroups.CreateTransitionRouteGroup populates the name automatically. Format: `projects//locations//agents//flows//transitionRouteGroups/`.
     */
    name?: string;
    /**
     * Transition routes associated with the TransitionRouteGroup.
     */
    transitionRoutes?: GoogleCloudDialogflowCxV3TransitionRouteInput[];
}
