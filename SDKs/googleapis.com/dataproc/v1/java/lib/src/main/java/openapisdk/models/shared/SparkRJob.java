package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SparkRJob
 * A Dataproc job for running Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) applications on YARN.
**/
public class SparkRJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archiveUris")
    public String[] archiveUris;
    public SparkRJob withArchiveUris(String[] archiveUris) {
        this.archiveUris = archiveUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("args")
    public String[] args;
    public SparkRJob withArgs(String[] args) {
        this.args = args;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileUris")
    public String[] fileUris;
    public SparkRJob withFileUris(String[] fileUris) {
        this.fileUris = fileUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loggingConfig")
    public LoggingConfig loggingConfig;
    public SparkRJob withLoggingConfig(LoggingConfig loggingConfig) {
        this.loggingConfig = loggingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainRFileUri")
    public String mainRFileUri;
    public SparkRJob withMainRFileUri(String mainRFileUri) {
        this.mainRFileUri = mainRFileUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public java.util.Map<String, String> properties;
    public SparkRJob withProperties(java.util.Map<String, String> properties) {
        this.properties = properties;
        return this;
    }
}