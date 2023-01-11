package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SparkJob
 * A Dataproc job for running Apache Spark (https://spark.apache.org/) applications on YARN.
**/
public class SparkJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archiveUris")
    public String[] archiveUris;
    public SparkJob withArchiveUris(String[] archiveUris) {
        this.archiveUris = archiveUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("args")
    public String[] args;
    public SparkJob withArgs(String[] args) {
        this.args = args;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileUris")
    public String[] fileUris;
    public SparkJob withFileUris(String[] fileUris) {
        this.fileUris = fileUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jarFileUris")
    public String[] jarFileUris;
    public SparkJob withJarFileUris(String[] jarFileUris) {
        this.jarFileUris = jarFileUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loggingConfig")
    public LoggingConfig loggingConfig;
    public SparkJob withLoggingConfig(LoggingConfig loggingConfig) {
        this.loggingConfig = loggingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainClass")
    public String mainClass;
    public SparkJob withMainClass(String mainClass) {
        this.mainClass = mainClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainJarFileUri")
    public String mainJarFileUri;
    public SparkJob withMainJarFileUri(String mainJarFileUri) {
        this.mainJarFileUri = mainJarFileUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public java.util.Map<String, String> properties;
    public SparkJob withProperties(java.util.Map<String, String> properties) {
        this.properties = properties;
        return this;
    }
}