import { SpeakeasyBase } from "../../../internal/utils";
import { ConferenceRequestStatus } from "./conferencerequeststatus";
import { ConferenceSolutionKey } from "./conferencesolutionkey";
export declare class CreateConferenceRequest extends SpeakeasyBase {
    conferenceSolutionKey?: ConferenceSolutionKey;
    /**
     * The client-generated unique ID for this request.
     *
     * @remarks
     * Clients should regenerate this ID for every new request. If an ID provided is the same as for the previous request, the request is ignored.
     */
    requestId?: string;
    status?: ConferenceRequestStatus;
}
