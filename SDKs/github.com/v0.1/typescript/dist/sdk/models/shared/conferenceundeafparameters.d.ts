import { SpeakeasyBase } from "../../../internal/utils";
/**
 * POST parameters
 */
export declare class ConferenceUndeafParameters extends SpeakeasyBase {
    /**
     * Name of the conference in question
     */
    conferenceName: string;
    /**
     * List of comma separated member IDs to be affected; `all` shorthand is available too.
     */
    memberID: string;
}
