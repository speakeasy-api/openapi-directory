import { SpeakeasyBase } from "../../../internal/utils";
import { AnnotationEnumAnsweredByEnum } from "./annotationenumansweredbyenum";
import { AnnotationEnumConnectivityIssueEnum } from "./annotationenumconnectivityissueenum";
/**
 * OK
 */
export declare class InsightsV1CallAnnotation extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Account.
     */
    accountSid?: string;
    answeredBy?: AnnotationEnumAnsweredByEnum;
    /**
     * Specify the call score. This is of type integer. Use a range of 1-5 to indicate the call experience score, with the following mapping as a reference for rating the call [5: Excellent, 4: Good, 3 : Fair, 2 : Poor, 1: Bad].
     */
    callScore?: number;
    /**
     * The unique SID identifier of the Call.
     */
    callSid?: string;
    /**
     * Specify any comments pertaining to the call. This of type string with a max limit of 100 characters. Twilio does not treat this field as PII, so don’t put any PII in here.
     */
    comment?: string;
    connectivityIssue?: AnnotationEnumConnectivityIssueEnum;
    /**
     * Associate this call with an incident or support ticket. This is of type string with a max limit of 100 characters. Twilio does not treat this field as PII, so don’t put any PII in here.
     */
    incident?: string;
    /**
     * Specify if the call had any subjective quality issues. Possible values, one or more of:  no_quality_issue, low_volume, choppy_robotic, echo, dtmf, latency, owa, static_noise. Use comma separated values to indicate multiple quality issues for the same call
     */
    qualityIssues?: string[];
    /**
     * Specify if the call was a spam call. Use this to provide feedback on whether calls placed from your account were marked as spam, or if inbound calls received by your account were unwanted spam. Is of type Boolean: true, false. Use true if the call was a spam call.
     */
    spam?: boolean;
    /**
     * The URL of this resource.
     */
    url?: string;
}
