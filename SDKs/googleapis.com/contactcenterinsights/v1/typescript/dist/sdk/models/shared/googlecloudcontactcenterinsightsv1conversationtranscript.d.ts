import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment } from "./googlecloudcontactcenterinsightsv1conversationtranscripttranscriptsegment";
/**
 * A message representing the transcript of a conversation.
 */
export declare class GoogleCloudContactcenterinsightsV1ConversationTranscript extends SpeakeasyBase {
    /**
     * A list of sequential transcript segments that comprise the conversation.
     */
    transcriptSegments?: GoogleCloudContactcenterinsightsV1ConversationTranscriptTranscriptSegment[];
}
