import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1TransitionRoute, GoogleCloudDialogflowCxV3beta1TransitionRouteInput } from "./googleclouddialogflowcxv3beta1transitionroute";
/**
 * An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
 */
export declare class GoogleCloudDialogflowCxV3beta1TransitionRouteGroup extends SpeakeasyBase {
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
    transitionRoutes?: GoogleCloudDialogflowCxV3beta1TransitionRoute[];
}
/**
 * An TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.
 */
export declare class GoogleCloudDialogflowCxV3beta1TransitionRouteGroupInput extends SpeakeasyBase {
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
    transitionRoutes?: GoogleCloudDialogflowCxV3beta1TransitionRouteInput[];
}
