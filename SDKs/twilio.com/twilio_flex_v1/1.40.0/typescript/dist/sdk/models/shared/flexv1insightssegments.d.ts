import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class FlexV1InsightsSegments extends SpeakeasyBase {
    /**
     * The unique id for the account.
     */
    accountId?: string;
    /**
     * The unique id for the agent.
     */
    agentId?: string;
    /**
     * The link to the agent conversation.
     */
    agentLink?: string;
    /**
     * The name of the agent.
     */
    agentName?: string;
    /**
     * The phone number of the agent.
     */
    agentPhone?: string;
    /**
     * The team name to which agent belongs.
     */
    agentTeamName?: string;
    /**
     * he team name to which agent belongs.
     */
    agentTeamNameInHierarchy?: string;
    /**
     * The percentage scored on the Assessments.
     */
    assessmentPercentage?: any;
    /**
     * The type of the assessment.
     */
    assessmentType?: any;
    /**
     * The link to the customer conversation.
     */
    customerLink?: string;
    /**
     * The name of the customer.
     */
    customerName?: string;
    /**
     * The phone number of the customer.
     */
    customerPhone?: string;
    /**
     * The date of the conversation.
     */
    date?: string;
    externalContact?: string;
    /**
     * The unique id for the conversation.
     */
    externalId?: string;
    /**
     * The hyperlink to recording of the task event.
     */
    externalSegmentLink?: string;
    /**
     * The uuid for the external_segment_link.
     */
    externalSegmentLinkId?: string;
    /**
     * The media identifiers of the conversation.
     */
    media?: any;
    queue?: string;
    /**
     * To unique id of the segment
     */
    segmentId?: string;
    /**
     * The offset value for the recording.
     */
    segmentRecordingOffset?: string;
    url?: string;
}
