package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SparkSqlBatch
 * A configuration for running Apache Spark SQL (https://spark.apache.org/sql/) queries as a batch workload.
**/
public class SparkSqlBatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jarFileUris")
    public String[] jarFileUris;
    public SparkSqlBatch withJarFileUris(String[] jarFileUris) {
        this.jarFileUris = jarFileUris;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryFileUri")
    public String queryFileUri;
    public SparkSqlBatch withQueryFileUri(String queryFileUri) {
        this.queryFileUri = queryFileUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryVariables")
    public java.util.Map<String, String> queryVariables;
    public SparkSqlBatch withQueryVariables(java.util.Map<String, String> queryVariables) {
        this.queryVariables = queryVariables;
        return this;
    }
}