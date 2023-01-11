package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OrderedJob
 * A job executed by the workflow.
**/
public class OrderedJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hadoopJob")
    public HadoopJob hadoopJob;
    public OrderedJob withHadoopJob(HadoopJob hadoopJob) {
        this.hadoopJob = hadoopJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hiveJob")
    public HiveJob hiveJob;
    public OrderedJob withHiveJob(HiveJob hiveJob) {
        this.hiveJob = hiveJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public OrderedJob withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pigJob")
    public PigJob pigJob;
    public OrderedJob withPigJob(PigJob pigJob) {
        this.pigJob = pigJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prerequisiteStepIds")
    public String[] prerequisiteStepIds;
    public OrderedJob withPrerequisiteStepIds(String[] prerequisiteStepIds) {
        this.prerequisiteStepIds = prerequisiteStepIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prestoJob")
    public PrestoJob prestoJob;
    public OrderedJob withPrestoJob(PrestoJob prestoJob) {
        this.prestoJob = prestoJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pysparkJob")
    public PySparkJob pysparkJob;
    public OrderedJob withPysparkJob(PySparkJob pysparkJob) {
        this.pysparkJob = pysparkJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduling")
    public JobScheduling scheduling;
    public OrderedJob withScheduling(JobScheduling scheduling) {
        this.scheduling = scheduling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sparkJob")
    public SparkJob sparkJob;
    public OrderedJob withSparkJob(SparkJob sparkJob) {
        this.sparkJob = sparkJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sparkRJob")
    public SparkRJob sparkRJob;
    public OrderedJob withSparkRJob(SparkRJob sparkRJob) {
        this.sparkRJob = sparkRJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sparkSqlJob")
    public SparkSqlJob sparkSqlJob;
    public OrderedJob withSparkSqlJob(SparkSqlJob sparkSqlJob) {
        this.sparkSqlJob = sparkSqlJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stepId")
    public String stepId;
    public OrderedJob withStepId(String stepId) {
        this.stepId = stepId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trinoJob")
    public TrinoJob trinoJob;
    public OrderedJob withTrinoJob(TrinoJob trinoJob) {
        this.trinoJob = trinoJob;
        return this;
    }
}