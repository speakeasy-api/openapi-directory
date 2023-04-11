import { SpeakeasyBase } from "../../../internal/utils";
/**
 * POST parameters
 */
export declare class RecordStopParameters extends SpeakeasyBase {
    /**
     * Unique identifier of the call
     */
    callUUID: string;
    /**
     * Full path to recording file, as returned by RecordStart; `all` shorthand is also available
     */
    recordFile: string;
}
