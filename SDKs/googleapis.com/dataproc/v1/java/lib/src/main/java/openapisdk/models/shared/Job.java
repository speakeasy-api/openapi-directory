package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Job
 * A Dataproc job resource.
**/
public class Job {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("done")
    public Boolean done;
    public Job withDone(Boolean done) {
        this.done = done;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driverControlFilesUri")
    public String driverControlFilesUri;
    public Job withDriverControlFilesUri(String driverControlFilesUri) {
        this.driverControlFilesUri = driverControlFilesUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("driverOutputResourceUri")
    public String driverOutputResourceUri;
    public Job withDriverOutputResourceUri(String driverOutputResourceUri) {
        this.driverOutputResourceUri = driverOutputResourceUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hadoopJob")
    public HadoopJob hadoopJob;
    public Job withHadoopJob(HadoopJob hadoopJob) {
        this.hadoopJob = hadoopJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hiveJob")
    public HiveJob hiveJob;
    public Job withHiveJob(HiveJob hiveJob) {
        this.hiveJob = hiveJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobUuid")
    public String jobUuid;
    public Job withJobUuid(String jobUuid) {
        this.jobUuid = jobUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labels")
    public java.util.Map<String, String> labels;
    public Job withLabels(java.util.Map<String, String> labels) {
        this.labels = labels;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pigJob")
    public PigJob pigJob;
    public Job withPigJob(PigJob pigJob) {
        this.pigJob = pigJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placement")
    public JobPlacement placement;
    public Job withPlacement(JobPlacement placement) {
        this.placement = placement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prestoJob")
    public PrestoJob prestoJob;
    public Job withPrestoJob(PrestoJob prestoJob) {
        this.prestoJob = prestoJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pysparkJob")
    public PySparkJob pysparkJob;
    public Job withPysparkJob(PySparkJob pysparkJob) {
        this.pysparkJob = pysparkJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reference")
    public JobReference reference;
    public Job withReference(JobReference reference) {
        this.reference = reference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scheduling")
    public JobScheduling scheduling;
    public Job withScheduling(JobScheduling scheduling) {
        this.scheduling = scheduling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sparkJob")
    public SparkJob sparkJob;
    public Job withSparkJob(SparkJob sparkJob) {
        this.sparkJob = sparkJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sparkRJob")
    public SparkRJob sparkRJob;
    public Job withSparkRJob(SparkRJob sparkRJob) {
        this.sparkRJob = sparkRJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sparkSqlJob")
    public SparkSqlJob sparkSqlJob;
    public Job withSparkSqlJob(SparkSqlJob sparkSqlJob) {
        this.sparkSqlJob = sparkSqlJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public JobStatus status;
    public Job withStatus(JobStatus status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusHistory")
    public JobStatus[] statusHistory;
    public Job withStatusHistory(JobStatus[] statusHistory) {
        this.statusHistory = statusHistory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trinoJob")
    public TrinoJob trinoJob;
    public Job withTrinoJob(TrinoJob trinoJob) {
        this.trinoJob = trinoJob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("yarnApplications")
    public YarnApplication[] yarnApplications;
    public Job withYarnApplications(YarnApplication[] yarnApplications) {
        this.yarnApplications = yarnApplications;
        return this;
    }
}