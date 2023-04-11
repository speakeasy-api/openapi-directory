import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Participant } from "./googleclouddialogflowv2participant";
/**
 * The response message for Participants.ListParticipants.
 */
export declare class GoogleCloudDialogflowV2ListParticipantsResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * The list of participants. There is a maximum number of items returned based on the page_size field in the request.
     */
    participants?: GoogleCloudDialogflowV2Participant[];
}
