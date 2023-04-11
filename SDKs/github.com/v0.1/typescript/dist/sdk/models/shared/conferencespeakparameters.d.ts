import { SpeakeasyBase } from "../../../internal/utils";
/**
 * POST parameters
 */
export declare class ConferenceSpeakParameters extends SpeakeasyBase {
    /**
     * Name of the conference in question
     */
    conferenceName: string;
    /**
     * List of comma separated member IDs to be affected; `all` shorthand is available too.
     */
    memberID: string;
    /**
     * Text to be synthesized
     */
    text: string;
}
