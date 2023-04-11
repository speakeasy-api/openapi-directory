import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides data to pass through to the worker harness.
 */
export declare class WorkerSettings extends SpeakeasyBase {
    /**
     * The base URL for accessing Google Cloud APIs. When workers access Google Cloud APIs, they logically do so via relative URLs. If this field is specified, it supplies the base URL to use for resolving these relative URLs. The normative algorithm used is defined by RFC 1808, "Relative Uniform Resource Locators". If not specified, the default value is "http://www.googleapis.com/"
     */
    baseUrl?: string;
    /**
     * Whether to send work progress updates to the service.
     */
    reportingEnabled?: boolean;
    /**
     * The Cloud Dataflow service path relative to the root URL, for example, "dataflow/v1b3/projects".
     */
    servicePath?: string;
    /**
     * The Shuffle service path relative to the root URL, for example, "shuffle/v1beta1".
     */
    shuffleServicePath?: string;
    /**
     * The prefix of the resources the system should use for temporary storage. The supported resource type is: Google Cloud Storage: storage.googleapis.com/{bucket}/{object} bucket.storage.googleapis.com/{object}
     */
    tempStoragePrefix?: string;
    /**
     * The ID of the worker running this pipeline.
     */
    workerId?: string;
}
