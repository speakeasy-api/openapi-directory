import { SpeakeasyBase } from "../../../internal/utils";
import { CallFeedbackSummaryEnumStatusEnum } from "./callfeedbacksummaryenumstatusenum";
/**
 * Created
 */
export declare class ApiV2010AccountCallCallFeedbackSummary extends SpeakeasyBase {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource.
     */
    accountSid?: string;
    /**
     * The total number of calls.
     */
    callCount?: number;
    /**
     * The total number of calls with a feedback entry.
     */
    callFeedbackCount?: number;
    /**
     * The date that this resource was created, given in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
     */
    dateCreated?: string;
    /**
     * The date that this resource was last updated, given in [RFC 2822](https://www.php.net/manual/en/class.datetime.php#datetime.constants.rfc2822) format.
     */
    dateUpdated?: string;
    /**
     * The last date for which feedback entries are included in this Feedback Summary, formatted as `YYYY-MM-DD` and specified in UTC.
     */
    endDate?: Date;
    /**
     * Whether the feedback summary includes subaccounts; `true` if it does, otherwise `false`.
     */
    includeSubaccounts?: boolean;
    /**
     * A list of issues experienced during the call. The issues can be: `imperfect-audio`, `dropped-call`, `incorrect-caller-id`, `post-dial-delay`, `digits-not-captured`, `audio-latency`, or `one-way-audio`.
     */
    issues?: any[];
    /**
     * The average QualityScore of the feedback entries.
     */
    qualityScoreAverage?: number;
    /**
     * The median QualityScore of the feedback entries.
     */
    qualityScoreMedian?: number;
    /**
     * The standard deviation of the quality scores.
     */
    qualityScoreStandardDeviation?: number;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string;
    /**
     * The first date for which feedback entries are included in this feedback summary, formatted as `YYYY-MM-DD` and specified in UTC.
     */
    startDate?: Date;
    status?: CallFeedbackSummaryEnumStatusEnum;
}
