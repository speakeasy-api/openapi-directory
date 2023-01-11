package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SparkRBatch
 * A configuration for running an Apache SparkR (https://spark.apache.org/docs/latest/sparkr.html) batch workload.
**/
public class SparkRBatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archiveUris")
    public String[] archiveUris;
    public SparkRBatch withArchiveUris(String[] archiveUris) {
        this.archiveUris = archiveUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("args")
    public String[] args;
    public SparkRBatch withArgs(String[] args) {
        this.args = args;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileUris")
    public String[] fileUris;
    public SparkRBatch withFileUris(String[] fileUris) {
        this.fileUris = fileUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mainRFileUri")
    public String mainRFileUri;
    public SparkRBatch withMainRFileUri(String mainRFileUri) {
        this.mainRFileUri = mainRFileUri;
        return this;
    }
}