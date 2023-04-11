import { SpeakeasyBase } from "../../../internal/utils";
import { InboundSsoAssignment } from "./inboundssoassignment";
/**
 * Response of the InboundSsoAssignmentsService.ListInboundSsoAssignments method.
 */
export declare class ListInboundSsoAssignmentsResponse extends SpeakeasyBase {
    /**
     * The assignments.
     */
    inboundSsoAssignments?: InboundSsoAssignment[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
