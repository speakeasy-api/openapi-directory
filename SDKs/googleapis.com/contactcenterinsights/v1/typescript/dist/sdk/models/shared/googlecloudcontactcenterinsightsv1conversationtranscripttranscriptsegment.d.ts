import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1ConversationParticipant } from "./googlecloudcontactcenterinsightsv1conversationparticipant";
import { GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata } from "./googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentdialogflowsegmentmetadata";
import { GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo } from "./googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegmentwordinfo";
import { GoogleCloudContactcenterinsightsV1SentimentData } from "./googlecloudcontactcenterinsightsv1sentimentdata";
/**
 * A segment of a full transcript.
 */
export declare class GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment extends SpeakeasyBase {
    /**
     * For conversations derived from multi-channel audio, this is the channel number corresponding to the audio from that channel. For audioChannelCount = N, its output values can range from '1' to 'N'. A channel tag of 0 indicates that the audio is mono.
     */
    channelTag?: number;
    /**
     * A confidence estimate between 0.0 and 1.0 of the fidelity of this segment. A default value of 0.0 indicates that the value is unset.
     */
    confidence?: number;
    /**
     * Metadata from Dialogflow relating to the current transcript segment.
     */
    dialogflowSegmentMetadata?: GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentDialogflowSegmentMetadata;
    /**
     * The language code of this segment as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. Example: "en-US".
     */
    languageCode?: string;
    /**
     * The time that the message occurred, if provided.
     */
    messageTime?: string;
    /**
     * The call participant speaking for a given utterance.
     */
    segmentParticipant?: GoogleCloudContactcenterinsightsV1ConversationParticipant;
    /**
     * The data for a sentiment annotation.
     */
    sentiment?: GoogleCloudContactcenterinsightsV1SentimentData;
    /**
     * The text of this segment.
     */
    text?: string;
    /**
     * A list of the word-specific information for each word in the segment.
     */
    words?: GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegmentWordInfo[];
}
