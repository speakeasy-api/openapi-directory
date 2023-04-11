import { SpeakeasyBase } from "../../../internal/utils";
import { LineItemAssignedTargetingOption } from "./lineitemassignedtargetingoption";
/**
 * Successful response
 */
export declare class BulkListAssignedTargetingOptionsResponse extends SpeakeasyBase {
    /**
     * The list of wrapper objects, each providing an assigned targeting option and the line item it is assigned to. This list will be absent if empty.
     */
    lineItemAssignedTargetingOptions?: LineItemAssignedTargetingOption[];
    /**
     * A token identifying the next page of results. This value should be specified as the pageToken in a subsequent call to `BulkListAssignedTargetingOptions` to fetch the next page of results. This token will be absent if there are no more line_item_assigned_targeting_options to return.
     */
    nextPageToken?: string;
}
