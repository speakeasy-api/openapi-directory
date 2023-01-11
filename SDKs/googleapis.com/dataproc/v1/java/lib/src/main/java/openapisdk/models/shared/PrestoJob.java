package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PrestoJob
 * A Dataproc job for running Presto (https://prestosql.io/) queries. IMPORTANT: The Dataproc Presto Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/presto) must be enabled when the cluster is created to submit a Presto job to the cluster.
**/
public class PrestoJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientTags")
    public String[] clientTags;
    public PrestoJob withClientTags(String[] clientTags) {
        this.clientTags = clientTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("continueOnFailure")
    public Boolean continueOnFailure;
    public PrestoJob withContinueOnFailure(Boolean continueOnFailure) {
        this.continueOnFailure = continueOnFailure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loggingConfig")
    public LoggingConfig loggingConfig;
    public PrestoJob withLoggingConfig(LoggingConfig loggingConfig) {
        this.loggingConfig = loggingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputFormat")
    public String outputFormat;
    public PrestoJob withOutputFormat(String outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public java.util.Map<String, String> properties;
    public PrestoJob withProperties(java.util.Map<String, String> properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryFileUri")
    public String queryFileUri;
    public PrestoJob withQueryFileUri(String queryFileUri) {
        this.queryFileUri = queryFileUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryList")
    public QueryList queryList;
    public PrestoJob withQueryList(QueryList queryList) {
        this.queryList = queryList;
        return this;
    }
}