import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Software Runtime Configuration to run Analyze.
 */
export declare class GoogleCloudDataplexV1EnvironmentInfrastructureSpecOsImageRuntime extends SpeakeasyBase {
    /**
     * Required. Dataplex Image version.
     */
    imageVersion?: string;
    /**
     * Optional. List of Java jars to be included in the runtime environment. Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar
     */
    javaLibraries?: string[];
    /**
     * Optional. Spark properties to provide configuration for use in sessions created for this environment. The properties to set on daemon config files. Property keys are specified in prefix:property format. The prefix must be "spark".
     */
    properties?: Record<string, string>;
    /**
     * Optional. A list of python packages to be installed. Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz
     */
    pythonPackages?: string[];
}
