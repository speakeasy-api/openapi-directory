import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Attempt } from "./googleclouddatalabelingv1beta1attempt";
import { GoogleCloudDatalabelingV1beta1EvaluationJobConfig } from "./googleclouddatalabelingv1beta1evaluationjobconfig";
/**
 * Output only. Describes the current state of the job.
 */
export declare enum GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Scheduled = "SCHEDULED",
    Running = "RUNNING",
    Paused = "PAUSED",
    Stopped = "STOPPED"
}
/**
 * Defines an evaluation job that runs periodically to generate Evaluations. [Creating an evaluation job](/ml-engine/docs/continuous-evaluation/create-job) is the starting point for using continuous evaluation.
 */
export declare class GoogleCloudDatalabelingV1beta1EvaluationJob extends SpeakeasyBase {
    /**
     * Required. Name of the AnnotationSpecSet describing all the labels that your machine learning model outputs. You must create this resource before you create an evaluation job and provide its name in the following format: "projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}"
     */
    annotationSpecSet?: string;
    /**
     * Output only. Every time the evaluation job runs and an error occurs, the failed attempt is appended to this array.
     */
    attempts?: GoogleCloudDatalabelingV1beta1Attempt[];
    /**
     * Output only. Timestamp of when this evaluation job was created.
     */
    createTime?: string;
    /**
     * Required. Description of the job. The description can be up to 25,000 characters long.
     */
    description?: string;
    /**
     * Configures specific details of how a continuous evaluation job works. Provide this configuration when you create an EvaluationJob.
     */
    evaluationJobConfig?: GoogleCloudDatalabelingV1beta1EvaluationJobConfig;
    /**
     * Required. Whether you want Data Labeling Service to provide ground truth labels for prediction input. If you want the service to assign human labelers to annotate your data, set this to `true`. If you want to provide your own ground truth labels in the evaluation job's BigQuery table, set this to `false`.
     */
    labelMissingGroundTruth?: boolean;
    /**
     * Required. The [AI Platform Prediction model version](/ml-engine/docs/prediction-overview) to be evaluated. Prediction input and output is sampled from this model version. When creating an evaluation job, specify the model version in the following format: "projects/{project_id}/models/{model_name}/versions/{version_name}" There can only be one evaluation job per model version.
     */
    modelVersion?: string;
    /**
     * Output only. After you create a job, Data Labeling Service assigns a name to the job with the following format: "projects/{project_id}/evaluationJobs/ {evaluation_job_id}"
     */
    name?: string;
    /**
     * Required. Describes the interval at which the job runs. This interval must be at least 1 day, and it is rounded to the nearest day. For example, if you specify a 50-hour interval, the job runs every 2 days. You can provide the schedule in [crontab format](/scheduler/docs/configuring/cron-job-schedules) or in an [English-like format](/appengine/docs/standard/python/config/cronref#schedule_format). Regardless of what you specify, the job will run at 10:00 AM UTC. Only the interval from this schedule is used, not the specific time of day.
     */
    schedule?: string;
    /**
     * Output only. Describes the current state of the job.
     */
    state?: GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum;
}
