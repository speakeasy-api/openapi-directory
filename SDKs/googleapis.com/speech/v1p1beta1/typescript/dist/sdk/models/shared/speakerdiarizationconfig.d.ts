import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Config to enable speaker diarization.
 */
export declare class SpeakerDiarizationConfigInput extends SpeakeasyBase {
    /**
     * If 'true', enables speaker detection for each recognized word in the top alternative of the recognition result using a speaker_label provided in the WordInfo.
     */
    enableSpeakerDiarization?: boolean;
    /**
     * Maximum number of speakers in the conversation. This range gives you more flexibility by allowing the system to automatically determine the correct number of speakers. If not set, the default value is 6.
     */
    maxSpeakerCount?: number;
    /**
     * Minimum number of speakers in the conversation. This range gives you more flexibility by allowing the system to automatically determine the correct number of speakers. If not set, the default value is 2.
     */
    minSpeakerCount?: number;
}
