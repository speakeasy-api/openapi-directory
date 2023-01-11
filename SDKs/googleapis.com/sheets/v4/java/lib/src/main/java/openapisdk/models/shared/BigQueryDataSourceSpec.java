package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BigQueryDataSourceSpec
 * The specification of a BigQuery data source that's connected to a sheet.
**/
public class BigQueryDataSourceSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectId")
    public String projectId;
    public BigQueryDataSourceSpec withProjectId(String projectId) {
        this.projectId = projectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("querySpec")
    public BigQueryQuerySpec querySpec;
    public BigQueryDataSourceSpec withQuerySpec(BigQueryQuerySpec querySpec) {
        this.querySpec = querySpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tableSpec")
    public BigQueryTableSpec tableSpec;
    public BigQueryDataSourceSpec withTableSpec(BigQueryTableSpec tableSpec) {
        this.tableSpec = tableSpec;
        return this;
    }
}