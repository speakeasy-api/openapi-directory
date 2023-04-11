import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1TaskInfrastructureSpec } from "./googleclouddataplexv1taskinfrastructurespec";
/**
 * Config for running scheduled notebooks.
 */
export declare class GoogleCloudDataplexV1TaskNotebookTaskConfig extends SpeakeasyBase {
    /**
     * Optional. Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
     */
    archiveUris?: string[];
    /**
     * Optional. Cloud Storage URIs of files to be placed in the working directory of each executor.
     */
    fileUris?: string[];
    /**
     * Configuration for the underlying infrastructure used to run workloads.
     */
    infrastructureSpec?: GoogleCloudDataplexV1TaskInfrastructureSpec;
    /**
     * Required. Path to input notebook. This can be the Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (TASK_key=value).
     */
    notebook?: string;
}
