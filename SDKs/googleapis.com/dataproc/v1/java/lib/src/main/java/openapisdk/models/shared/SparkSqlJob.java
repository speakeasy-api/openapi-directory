package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SparkSqlJob
 * A Dataproc job for running Apache Spark SQL (https://spark.apache.org/sql/) queries.
**/
public class SparkSqlJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jarFileUris")
    public String[] jarFileUris;
    public SparkSqlJob withJarFileUris(String[] jarFileUris) {
        this.jarFileUris = jarFileUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loggingConfig")
    public LoggingConfig loggingConfig;
    public SparkSqlJob withLoggingConfig(LoggingConfig loggingConfig) {
        this.loggingConfig = loggingConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public java.util.Map<String, String> properties;
    public SparkSqlJob withProperties(java.util.Map<String, String> properties) {
        this.properties = properties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryFileUri")
    public String queryFileUri;
    public SparkSqlJob withQueryFileUri(String queryFileUri) {
        this.queryFileUri = queryFileUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryList")
    public QueryList queryList;
    public SparkSqlJob withQueryList(QueryList queryList) {
        this.queryList = queryList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scriptVariables")
    public java.util.Map<String, String> scriptVariables;
    public SparkSqlJob withScriptVariables(java.util.Map<String, String> scriptVariables) {
        this.scriptVariables = scriptVariables;
        return this;
    }
}