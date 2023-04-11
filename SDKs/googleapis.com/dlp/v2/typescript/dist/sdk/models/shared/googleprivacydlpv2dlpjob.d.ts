import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2ActionDetails } from "./googleprivacydlpv2actiondetails";
import { GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails } from "./googleprivacydlpv2analyzedatasourceriskdetails";
import { GooglePrivacyDlpV2Error } from "./googleprivacydlpv2error";
import { GooglePrivacyDlpV2InspectDataSourceDetails } from "./googleprivacydlpv2inspectdatasourcedetails";
/**
 * State of a job.
 */
export declare enum GooglePrivacyDlpV2DlpJobStateEnum {
    JobStateUnspecified = "JOB_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Done = "DONE",
    Canceled = "CANCELED",
    Failed = "FAILED",
    Active = "ACTIVE"
}
/**
 * The type of job.
 */
export declare enum GooglePrivacyDlpV2DlpJobTypeEnum {
    DlpJobTypeUnspecified = "DLP_JOB_TYPE_UNSPECIFIED",
    InspectJob = "INSPECT_JOB",
    RiskAnalysisJob = "RISK_ANALYSIS_JOB"
}
/**
 * Combines all of the information about a DLP job.
 */
export declare class GooglePrivacyDlpV2DlpJob extends SpeakeasyBase {
    /**
     * Events that should occur after the job has completed.
     */
    actionDetails?: GooglePrivacyDlpV2ActionDetails[];
    /**
     * Time when the job was created.
     */
    createTime?: string;
    /**
     * Time when the job finished.
     */
    endTime?: string;
    /**
     * A stream of errors encountered running the job.
     */
    errors?: GooglePrivacyDlpV2Error[];
    /**
     * The results of an inspect DataSource job.
     */
    inspectDetails?: GooglePrivacyDlpV2InspectDataSourceDetails;
    /**
     * If created by a job trigger, the resource name of the trigger that instantiated the job.
     */
    jobTriggerName?: string;
    /**
     * The server-assigned name.
     */
    name?: string;
    /**
     * Result of a risk analysis operation request.
     */
    riskDetails?: GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails;
    /**
     * Time when the job started.
     */
    startTime?: string;
    /**
     * State of a job.
     */
    state?: GooglePrivacyDlpV2DlpJobStateEnum;
    /**
     * The type of job.
     */
    type?: GooglePrivacyDlpV2DlpJobTypeEnum;
}
