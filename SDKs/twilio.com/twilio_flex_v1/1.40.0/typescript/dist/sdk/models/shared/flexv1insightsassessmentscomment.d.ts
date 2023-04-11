import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class FlexV1InsightsAssessmentsComment extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Insights resource and owns this resource.
     */
    accountSid?: string;
    /**
     * The id of the agent.
     */
    agentId?: string;
    /**
     * The unique ID of the assessment.
     */
    assessmentId?: string;
    /**
     * The comment added for assessment.
     */
    comment?: any;
    /**
     * The offset
     */
    offset?: number;
    /**
     * The flag indicating if this assessment is part of report
     */
    report?: boolean;
    /**
     * The id of the segment.
     */
    segmentId?: string;
    /**
     * The timestamp when the record is inserted
     */
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
