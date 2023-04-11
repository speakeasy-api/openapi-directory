import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1EventHandler } from "./googleclouddialogflowcxv3beta1eventhandler";
import { GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode } from "./googleclouddialogflowcxv3beta1transitioncoveragetransitionnode";
import { GoogleCloudDialogflowCxV3beta1TransitionRoute } from "./googleclouddialogflowcxv3beta1transitionroute";
/**
 * A transition in a page.
 */
export declare class GoogleCloudDialogflowCxV3beta1TransitionCoverageTransition extends SpeakeasyBase {
    /**
     * Whether or not the transition is covered by at least one of the agent's test cases.
     */
    covered?: boolean;
    /**
     * An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow.
     */
    eventHandler?: GoogleCloudDialogflowCxV3beta1EventHandler;
    /**
     * The index of a transition in the transition list. Starting from 0.
     */
    index?: number;
    /**
     * The source or target of a transition.
     */
    source?: GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode;
    /**
     * The source or target of a transition.
     */
    target?: GoogleCloudDialogflowCxV3beta1TransitionCoverageTransitionNode;
    /**
     * A transition route specifies a intent that can be matched and/or a data condition that can be evaluated during a session. When a specified transition is matched, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the transition, it will be called. * If there is a `target_page` associated with the transition, the session will transition into the specified page. * If there is a `target_flow` associated with the transition, the session will transition into the specified flow.
     */
    transitionRoute?: GoogleCloudDialogflowCxV3beta1TransitionRoute;
}
