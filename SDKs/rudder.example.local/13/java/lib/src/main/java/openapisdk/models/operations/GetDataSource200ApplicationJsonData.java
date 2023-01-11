package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetDataSource200ApplicationJsonData {
    @JsonProperty("datasources")
    public openapisdk.models.shared.Datasource[] datasources;
    public GetDataSource200ApplicationJsonData withDatasources(openapisdk.models.shared.Datasource[] datasources) {
        this.datasources = datasources;
        return this;
    }
}