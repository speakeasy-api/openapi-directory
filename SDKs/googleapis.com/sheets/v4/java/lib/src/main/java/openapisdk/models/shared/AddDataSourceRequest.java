package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddDataSourceRequest
 * Adds a data source. After the data source is added successfully, an associated DATA_SOURCE sheet is created and an execution is triggered to refresh the sheet to read data from the data source. The request requires an additional `bigquery.readonly` OAuth scope.
**/
public class AddDataSourceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSource")
    public DataSource dataSource;
    public AddDataSourceRequest withDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
        return this;
    }
}