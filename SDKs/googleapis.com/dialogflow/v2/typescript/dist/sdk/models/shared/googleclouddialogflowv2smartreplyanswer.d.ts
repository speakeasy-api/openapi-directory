import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a smart reply answer.
 */
export declare class GoogleCloudDialogflowV2SmartReplyAnswer extends SpeakeasyBase {
    /**
     * The name of answer record, in the format of "projects//locations//answerRecords/"
     */
    answerRecord?: string;
    /**
     * Smart reply confidence. The system's confidence score that this reply is a good match for this conversation, as a value from 0.0 (completely uncertain) to 1.0 (completely certain).
     */
    confidence?: number;
    /**
     * The content of the reply.
     */
    reply?: string;
}
