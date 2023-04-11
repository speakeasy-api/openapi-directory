import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConferenceSolutionKey extends SpeakeasyBase {
    /**
     * The conference solution type.
     *
     * @remarks
     * If a client encounters an unfamiliar or empty type, it should still be able to display the entry points. However, it should disallow modifications.
     * The possible values are:
     * - "eventHangout" for Hangouts for consumers (deprecated; existing events may show this conference solution type but new conferences cannot be created)
     * - "eventNamedHangout" for classic Hangouts for Google Workspace users (deprecated; existing events may show this conference solution type but new conferences cannot be created)
     * - "hangoutsMeet" for Google Meet (http://meet.google.com)
     * - "addOn" for 3P conference providers
     */
    type?: string;
}
