package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateDataSourceRequest
 * Updates a data source. After the data source is updated successfully, an execution is triggered to refresh the associated DATA_SOURCE sheet to read data from the updated data source. The request requires an additional `bigquery.readonly` OAuth scope.
**/
public class UpdateDataSourceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSource")
    public DataSource dataSource;
    public UpdateDataSourceRequest withDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public String fields;
    public UpdateDataSourceRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
}