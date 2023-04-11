import { SpeakeasyBase } from "../../../internal/utils";
import { WorkerSettings } from "./workersettings";
/**
 * Taskrunner configuration settings.
 */
export declare class TaskRunnerSettings extends SpeakeasyBase {
    /**
     * Whether to also send taskrunner log info to stderr.
     */
    alsologtostderr?: boolean;
    /**
     * The location on the worker for task-specific subdirectories.
     */
    baseTaskDir?: string;
    /**
     * The base URL for the taskrunner to use when accessing Google Cloud APIs. When workers access Google Cloud APIs, they logically do so via relative URLs. If this field is specified, it supplies the base URL to use for resolving these relative URLs. The normative algorithm used is defined by RFC 1808, "Relative Uniform Resource Locators". If not specified, the default value is "http://www.googleapis.com/"
     */
    baseUrl?: string;
    /**
     * The file to store preprocessing commands in.
     */
    commandlinesFileName?: string;
    /**
     * Whether to continue taskrunner if an exception is hit.
     */
    continueOnException?: boolean;
    /**
     * The API version of endpoint, e.g. "v1b3"
     */
    dataflowApiVersion?: string;
    /**
     * The command to launch the worker harness.
     */
    harnessCommand?: string;
    /**
     * The suggested backend language.
     */
    languageHint?: string;
    /**
     * The directory on the VM to store logs.
     */
    logDir?: string;
    /**
     * Whether to send taskrunner log info to Google Compute Engine VM serial console.
     */
    logToSerialconsole?: boolean;
    /**
     * Indicates where to put logs. If this is not specified, the logs will not be uploaded. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}
     */
    logUploadLocation?: string;
    /**
     * The OAuth2 scopes to be requested by the taskrunner in order to access the Cloud Dataflow API.
     */
    oauthScopes?: string[];
    /**
     * Provides data to pass through to the worker harness.
     */
    parallelWorkerSettings?: WorkerSettings;
    /**
     * The streaming worker main class name.
     */
    streamingWorkerMainClass?: string;
    /**
     * The UNIX group ID on the worker VM to use for tasks launched by taskrunner; e.g. "wheel".
     */
    taskGroup?: string;
    /**
     * The UNIX user ID on the worker VM to use for tasks launched by taskrunner; e.g. "root".
     */
    taskUser?: string;
    /**
     * The prefix of the resources the taskrunner should use for temporary storage. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}
     */
    tempStoragePrefix?: string;
    /**
     * The ID string of the VM.
     */
    vmId?: string;
    /**
     * The file to store the workflow in.
     */
    workflowFileName?: string;
}
