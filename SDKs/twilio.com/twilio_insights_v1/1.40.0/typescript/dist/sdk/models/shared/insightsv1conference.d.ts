import { SpeakeasyBase } from "../../../internal/utils";
import { ConferenceEnumConferenceEndReasonEnum } from "./conferenceenumconferenceendreasonenum";
import { ConferenceEnumConferenceStatusEnum } from "./conferenceenumconferencestatusenum";
import { ConferenceEnumProcessingStateEnum } from "./conferenceenumprocessingstateenum";
import { ConferenceEnumRegionEnum } from "./conferenceenumregionenum";
import { ConferenceEnumTagEnum } from "./conferenceenumtagenum";
/**
 * OK
 */
export declare class InsightsV1Conference extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Account.
     */
    accountSid?: string;
    /**
     * The unique SID identifier of the Conference.
     */
    conferenceSid?: string;
    /**
     * Duration of the between conference start event and conference end event in seconds.
     */
    connectDurationSeconds?: number;
    /**
     * Conference creation date and time in ISO 8601 format.
     */
    createTime?: Date;
    /**
     * Potential issues detected by Twilio during the conference.
     */
    detectedIssues?: any;
    /**
     * Conference duration in seconds.
     */
    durationSeconds?: number;
    endReason?: ConferenceEnumConferenceEndReasonEnum;
    /**
     * Conference end date and time in ISO 8601 format.
     */
    endTime?: Date;
    /**
     * Call SID of the participant whose actions ended the conference.
     */
    endedBy?: string;
    /**
     * Custom label for the conference resource, up to 64 characters.
     */
    friendlyName?: string;
    /**
     * Contains a dictionary of URL links to nested resources of this Conference.
     */
    links?: Record<string, any>;
    /**
     * Actual maximum number of concurrent participants in the conference.
     */
    maxConcurrentParticipants?: number;
    /**
     * Maximum number of concurrent participants as specified by the configuration.
     */
    maxParticipants?: number;
    mixerRegion?: ConferenceEnumRegionEnum;
    mixerRegionRequested?: ConferenceEnumRegionEnum;
    processingState?: ConferenceEnumProcessingStateEnum;
    /**
     * Boolean. Indicates whether recording was enabled at the conference mixer.
     */
    recordingEnabled?: boolean;
    /**
     * Timestamp in ISO 8601 format when the conference started. Conferences do not start until at least two participants join, at least one of whom has startConferenceOnEnter=true.
     */
    startTime?: Date;
    status?: ConferenceEnumConferenceStatusEnum;
    /**
     * Object. Contains details about conference tags including severity.
     */
    tagInfo?: any;
    /**
     * Tags for detected conference conditions and participant behaviors which may be of interest.
     */
    tags?: ConferenceEnumTagEnum[];
    /**
     * Unique conference participants based on caller ID.
     */
    uniqueParticipants?: number;
    /**
     * The URL of this resource.
     */
    url?: string;
}
