import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The type of the event (see JobEventType).
 */
export declare enum JobEventTypeEnum {
    JobEventTypeUnspecified = "JOB_EVENT_TYPE_UNSPECIFIED",
    Impression = "IMPRESSION",
    View = "VIEW",
    ViewRedirect = "VIEW_REDIRECT",
    ApplicationStart = "APPLICATION_START",
    ApplicationFinish = "APPLICATION_FINISH",
    ApplicationQuickSubmission = "APPLICATION_QUICK_SUBMISSION",
    ApplicationRedirect = "APPLICATION_REDIRECT",
    ApplicationStartFromSearch = "APPLICATION_START_FROM_SEARCH",
    ApplicationRedirectFromSearch = "APPLICATION_REDIRECT_FROM_SEARCH",
    ApplicationCompanySubmit = "APPLICATION_COMPANY_SUBMIT",
    Bookmark = "BOOKMARK",
    Notification = "NOTIFICATION",
    Hired = "HIRED",
    SentCv = "SENT_CV",
    InterviewGranted = "INTERVIEW_GRANTED"
}
/**
 * An event issued when a job seeker interacts with the application that implements Cloud Talent Solution.
 */
export declare class JobEvent extends SpeakeasyBase {
    /**
     * Required. The job name(s) associated with this event. For example, if this is an impression event, this field contains the identifiers of all jobs shown to the job seeker. If this was a view event, this field contains the identifier of the viewed job. The format is "projects/{project_id}/tenants/{tenant_id}/jobs/{job_id}", for example, "projects/foo/tenants/bar/jobs/baz".
     */
    jobs?: string[];
    /**
     * Required. The type of the event (see JobEventType).
     */
    type?: JobEventTypeEnum;
}
