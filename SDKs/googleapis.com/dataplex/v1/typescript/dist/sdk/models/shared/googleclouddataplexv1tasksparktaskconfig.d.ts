import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1TaskInfrastructureSpec } from "./googleclouddataplexv1taskinfrastructurespec";
/**
 * User-specified config for running a Spark task.
 */
export declare class GoogleCloudDataplexV1TaskSparkTaskConfig extends SpeakeasyBase {
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
     * The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris. The execution args are passed in as a sequence of named process arguments (--key=value).
     */
    mainClass?: string;
    /**
     * The Cloud Storage URI of the jar file that contains the main class. The execution args are passed in as a sequence of named process arguments (--key=value).
     */
    mainJarFileUri?: string;
    /**
     * The Gcloud Storage URI of the main Python file to use as the driver. Must be a .py file. The execution args are passed in as a sequence of named process arguments (--key=value).
     */
    pythonScriptFile?: string;
    /**
     * The query text. The execution args are used to declare a set of script variables (set key="value";).
     */
    sqlScript?: string;
    /**
     * A reference to a query file. This can be the Cloud Storage URI of the query file or it can the path to a SqlScript Content. The execution args are used to declare a set of script variables (set key="value";).
     */
    sqlScriptFile?: string;
}
