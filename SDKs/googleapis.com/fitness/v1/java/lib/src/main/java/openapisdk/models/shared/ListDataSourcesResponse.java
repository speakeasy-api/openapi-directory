package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDataSourcesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataSource")
    public DataSource[] dataSource;
    public ListDataSourcesResponse withDataSource(DataSource[] dataSource) {
        this.dataSource = dataSource;
        return this;
    }
}