import { SpeakeasyBase } from "../../../internal/utils";
export declare class EmbeddedRecordingResource extends SpeakeasyBase {
    /**
     * The processing status of the recording. Possible values are (but not limited to):
     *
     * @remarks
     *
     * not_recorded: there is no recording available, and there will not be one becoming available
     *
     * pending: the recording is currently being processed by the system
     *
     * processing: the recording is currently being processed by the system
     *
     * completed: the recording processing has been completed
     *
     */
    recordingStatus?: string;
    /**
     * The status of the call that produced this recording. Possible values are (but not limited to):
     *
     * @remarks
     *
     * no-answer: The call was not answered
     *
     * failed: The call was not able to be placed
     *
     * busy: The call was busy
     *
     * ringing: The call is ringing
     *
     * in-progress: The call is ongoing
     *
     * completed: The call is finished
     *
     */
    status?: string;
    /**
     * The url of the recording
     */
    url?: string;
}
