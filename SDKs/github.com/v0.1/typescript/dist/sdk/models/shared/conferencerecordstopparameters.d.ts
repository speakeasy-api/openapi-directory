import { SpeakeasyBase } from "../../../internal/utils";
/**
 * POST parameters
 */
export declare class ConferenceRecordStopParameters extends SpeakeasyBase {
    /**
     * Name of the conference in question
     */
    conferenceName: string;
    /**
     * Full path to recording file, as returned by ConferenceRecordStart; `all` shorthand is also available
     */
    recordFile: string;
}
