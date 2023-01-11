package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteDataSource200ApplicationJsonData {
    @JsonProperty("datasources")
    public openapisdk.models.shared.Datasource[] datasources;
    public DeleteDataSource200ApplicationJsonData withDatasources(openapisdk.models.shared.Datasource[] datasources) {
        this.datasources = datasources;
        return this;
    }
}