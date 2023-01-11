package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrinoJob
 * A Dataproc job for running Trino (https://trino.io/) queries. IMPORTANT: The Dataproc Trino Optional Component (https://cloud.google.com/dataproc/docs/concepts/components/trino) must be enabled when the cluster is created to submit a Trino job to the cluster.
**/
public class TrinoJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientTags")
    public String[] clientTags;
    public TrinoJob withClientTags(String[] clientTags) {
        this.clientTags = clientTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("continueOnFailure")
    public Boolean continueOnFailure;
    public TrinoJob withContinueOnFailure(Boolean continueOnFailure) {
        this.continueOnFailure = continueOnFailure;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loggingConfig")
    public LoggingConfig loggingConfig;
    public TrinoJob withLoggingConfig(LoggingConfig loggingConfig) {
        this.loggingConfig = loggingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputFormat")
    public String outputFormat;
    public TrinoJob withOutputFormat(String outputFormat) {
        this.outputFormat = outputFormat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public java.util.Map<String, String> properties;
    public TrinoJob withProperties(java.util.Map<String, String> properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryFileUri")
    public String queryFileUri;
    public TrinoJob withQueryFileUri(String queryFileUri) {
        this.queryFileUri = queryFileUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryList")
    public QueryList queryList;
    public TrinoJob withQueryList(QueryList queryList) {
        this.queryList = queryList;
        return this;
    }
}