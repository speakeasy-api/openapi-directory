import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedTargetingOption } from "./assignedtargetingoption";
/**
 * Response message for ListAdvertiserAssignedTargetingOptions.
 */
export declare class ListAdvertiserAssignedTargetingOptionsResponse extends SpeakeasyBase {
    /**
     * The list of assigned targeting options. This list will be absent if empty.
     */
    assignedTargetingOptions?: AssignedTargetingOption[];
    /**
     * A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListAdvertiserAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return.
     */
    nextPageToken?: string;
}
