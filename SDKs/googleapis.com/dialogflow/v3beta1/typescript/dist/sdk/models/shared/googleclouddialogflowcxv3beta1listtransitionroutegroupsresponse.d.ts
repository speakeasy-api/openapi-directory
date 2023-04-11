import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1TransitionRouteGroup } from "./googleclouddialogflowcxv3beta1transitionroutegroup";
/**
 * The response message for TransitionRouteGroups.ListTransitionRouteGroups.
 */
export declare class GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * The list of transition route groups. There will be a maximum number of items returned based on the page_size field in the request. The list may in some cases be empty or contain fewer entries than page_size even if this isn't the last page.
     */
    transitionRouteGroups?: GoogleCloudDialogflowCxV3beta1TransitionRouteGroup[];
}
