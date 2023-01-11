package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SparkBatch
 * A configuration for running an Apache Spark (https://spark.apache.org/) batch workload.
**/
public class SparkBatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archiveUris")
    public String[] archiveUris;
    public SparkBatch withArchiveUris(String[] archiveUris) {
        this.archiveUris = archiveUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("args")
    public String[] args;
    public SparkBatch withArgs(String[] args) {
        this.args = args;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileUris")
    public String[] fileUris;
    public SparkBatch withFileUris(String[] fileUris) {
        this.fileUris = fileUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jarFileUris")
    public String[] jarFileUris;
    public SparkBatch withJarFileUris(String[] jarFileUris) {
        this.jarFileUris = jarFileUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainClass")
    public String mainClass;
    public SparkBatch withMainClass(String mainClass) {
        this.mainClass = mainClass;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainJarFileUri")
    public String mainJarFileUri;
    public SparkBatch withMainJarFileUri(String mainJarFileUri) {
        this.mainJarFileUri = mainJarFileUri;
        return this;
    }
}