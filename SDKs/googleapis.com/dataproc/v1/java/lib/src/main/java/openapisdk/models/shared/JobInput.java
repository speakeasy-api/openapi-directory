package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobInput
 * A Dataproc job resource.
**/
public class JobInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hadoopJob")
    public HadoopJob hadoopJob;
    public JobInput withHadoopJob(HadoopJob hadoopJob) {
        this.hadoopJob = hadoopJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hiveJob")
    public HiveJob hiveJob;
    public JobInput withHiveJob(HiveJob hiveJob) {
        this.hiveJob = hiveJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public JobInput withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pigJob")
    public PigJob pigJob;
    public JobInput withPigJob(PigJob pigJob) {
        this.pigJob = pigJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placement")
    public JobPlacementInput placement;
    public JobInput withPlacement(JobPlacementInput placement) {
        this.placement = placement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prestoJob")
    public PrestoJob prestoJob;
    public JobInput withPrestoJob(PrestoJob prestoJob) {
        this.prestoJob = prestoJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pysparkJob")
    public PySparkJob pysparkJob;
    public JobInput withPysparkJob(PySparkJob pysparkJob) {
        this.pysparkJob = pysparkJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reference")
    public JobReference reference;
    public JobInput withReference(JobReference reference) {
        this.reference = reference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduling")
    public JobScheduling scheduling;
    public JobInput withScheduling(JobScheduling scheduling) {
        this.scheduling = scheduling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sparkJob")
    public SparkJob sparkJob;
    public JobInput withSparkJob(SparkJob sparkJob) {
        this.sparkJob = sparkJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sparkRJob")
    public SparkRJob sparkRJob;
    public JobInput withSparkRJob(SparkRJob sparkRJob) {
        this.sparkRJob = sparkRJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sparkSqlJob")
    public SparkSqlJob sparkSqlJob;
    public JobInput withSparkSqlJob(SparkSqlJob sparkSqlJob) {
        this.sparkSqlJob = sparkSqlJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trinoJob")
    public TrinoJob trinoJob;
    public JobInput withTrinoJob(TrinoJob trinoJob) {
        this.trinoJob = trinoJob;
        return this;
    }
}