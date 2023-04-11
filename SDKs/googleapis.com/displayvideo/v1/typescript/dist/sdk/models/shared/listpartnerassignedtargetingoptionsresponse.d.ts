import { SpeakeasyBase } from "../../../internal/utils";
import { AssignedTargetingOption } from "./assignedtargetingoption";
/**
 * Successful response
 */
export declare class ListPartnerAssignedTargetingOptionsResponse extends SpeakeasyBase {
    /**
     * The list of assigned targeting options. This list will be absent if empty.
     */
    assignedTargetingOptions?: AssignedTargetingOption[];
    /**
     * A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListPartnerAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return.
     */
    nextPageToken?: string;
}
