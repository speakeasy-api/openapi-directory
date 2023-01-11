package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DataSourceSpec
 * This specifies the details of the data source. For example, for BigQuery, this specifies information about the BigQuery source.
**/
public class DataSourceSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bigQuery")
    public BigQueryDataSourceSpec bigQuery;
    public DataSourceSpec withBigQuery(BigQueryDataSourceSpec bigQuery) {
        this.bigQuery = bigQuery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public DataSourceParameter[] parameters;
    public DataSourceSpec withParameters(DataSourceParameter[] parameters) {
        this.parameters = parameters;
        return this;
    }
}