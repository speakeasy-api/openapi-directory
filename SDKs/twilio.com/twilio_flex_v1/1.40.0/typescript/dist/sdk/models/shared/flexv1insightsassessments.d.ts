import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class FlexV1InsightsAssessments extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Account.
     */
    accountSid?: string;
    /**
     * The id of the Agent
     */
    agentId?: string;
    /**
     * The id of the answer selected by user
     */
    answerId?: string;
    /**
     * The answer text selected by user
     */
    answerText?: string;
    /**
     * Assessment Details associated with an assessment
     */
    assessment?: any;
    /**
     * The unique id of the assessment
     */
    assessmentId?: string;
    /**
     * Offset of the conversation
     */
    offset?: number;
    /**
     * The flag indicating if this assessment is part of report
     */
    report?: boolean;
    /**
     * Segment Id of conversation
     */
    segmentId?: string;
    timestamp?: number;
    url?: string;
    /**
     * The email id of the user.
     */
    userEmail?: string;
    /**
     * The name of the user.
     */
    userName?: string;
    /**
     * The weightage given to this comment
     */
    weight?: number;
}
