package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BigQueryTableSpec
 * Specifies a BigQuery table definition. Only [native tables](https://cloud.google.com/bigquery/docs/tables-intro) is allowed.
**/
public class BigQueryTableSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datasetId")
    public String datasetId;
    public BigQueryTableSpec withDatasetId(String datasetId) {
        this.datasetId = datasetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableId")
    public String tableId;
    public BigQueryTableSpec withTableId(String tableId) {
        this.tableId = tableId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableProjectId")
    public String tableProjectId;
    public BigQueryTableSpec withTableProjectId(String tableProjectId) {
        this.tableProjectId = tableProjectId;
        return this;
    }
}