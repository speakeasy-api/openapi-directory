import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for a user-defined Spark routine.
 */
export declare class SparkOptions extends SpeakeasyBase {
    /**
     * Archive files to be extracted into the working directory of each executor. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html).
     */
    archiveUris?: string[];
    /**
     * Fully qualified name of the user-provided Spark connection object. Format: ```"projects/{project_id}/locations/{location_id}/connections/{connection_id}"```
     */
    connection?: string;
    /**
     * Custom container image for the runtime environment.
     */
    containerImage?: string;
    /**
     * Files to be placed in the working directory of each executor. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html).
     */
    fileUris?: string[];
    /**
     * JARs to include on the driver and executor CLASSPATH. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html).
     */
    jarUris?: string[];
    /**
     * The fully qualified name of a class in jar_uris, for example, com.example.wordcount. Exactly one of main_class and main_jar_uri field should be set for Java/Scala language type.
     */
    mainClass?: string;
    /**
     * The main file/jar URI of the Spark application. Exactly one of the definition_body field and the main_file_uri field must be set for Python.
     */
    mainFileUri?: string;
    /**
     * Configuration properties as a set of key/value pairs, which will be passed on to the Spark application. For more information, see [Apache Spark](https://spark.apache.org/docs/latest/index.html) and the [procedure option list](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#procedure_option_list).
     */
    properties?: Record<string, string>;
    /**
     * Python files to be placed on the PYTHONPATH for PySpark application. Supported file types: `.py`, `.egg`, and `.zip`. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html).
     */
    pyFileUris?: string[];
    /**
     * Runtime version. If not specified, the default runtime version is used.
     */
    runtimeVersion?: string;
}
