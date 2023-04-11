import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Cloud Storage source of conversation data.
 */
export declare class GoogleCloudContactcenterinsightsV1GcsSource extends SpeakeasyBase {
    /**
     * Cloud Storage URI that points to a file that contains the conversation audio.
     */
    audioUri?: string;
    /**
     * Immutable. Cloud Storage URI that points to a file that contains the conversation transcript.
     */
    transcriptUri?: string;
}
