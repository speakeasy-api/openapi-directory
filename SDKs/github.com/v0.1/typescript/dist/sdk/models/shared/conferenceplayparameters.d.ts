import { SpeakeasyBase } from "../../../internal/utils";
/**
 * POST parameters
 */
export declare class ConferencePlayParameters extends SpeakeasyBase {
    /**
     * Name of the conference in question
     */
    conferenceName: string;
    /**
     * Path/URI of the media file to be played
     */
    filePath: string;
    /**
     * List of comma separated member IDs to be affected; `all` shorthand is available too.
     */
    memberID: string;
}
