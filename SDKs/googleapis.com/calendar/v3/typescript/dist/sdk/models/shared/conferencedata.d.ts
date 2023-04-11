import { SpeakeasyBase } from "../../../internal/utils";
import { ConferenceParameters } from "./conferenceparameters";
import { ConferenceSolution } from "./conferencesolution";
import { CreateConferenceRequest } from "./createconferencerequest";
import { EntryPoint } from "./entrypoint";
export declare class ConferenceData extends SpeakeasyBase {
    /**
     * The ID of the conference.
     *
     * @remarks
     * Can be used by developers to keep track of conferences, should not be displayed to users.
     * The ID value is formed differently for each conference solution type:
     * - eventHangout: ID is not set. (This conference type is deprecated.)
     * - eventNamedHangout: ID is the name of the Hangout. (This conference type is deprecated.)
     * - hangoutsMeet: ID is the 10-letter meeting code, for example aaa-bbbb-ccc.
     * - addOn: ID is defined by the third-party provider.  Optional.
     */
    conferenceId?: string;
    conferenceSolution?: ConferenceSolution;
    createRequest?: CreateConferenceRequest;
    /**
     * Information about individual conference entry points, such as URLs or phone numbers.
     *
     * @remarks
     * All of them must belong to the same conference.
     * Either conferenceSolution and at least one entryPoint, or createRequest is required.
     */
    entryPoints?: EntryPoint[];
    /**
     * Additional notes (such as instructions from the domain administrator, legal notices) to display to the user. Can contain HTML. The maximum length is 2048 characters. Optional.
     */
    notes?: string;
    parameters?: ConferenceParameters;
    /**
     * The signature of the conference data.
     *
     * @remarks
     * Generated on server side.
     * Unset for a conference with a failed create request.
     * Optional for a conference with a pending create request.
     */
    signature?: string;
}
