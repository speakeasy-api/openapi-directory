package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAllDataSources200ApplicationJsonData {
    @JsonProperty("datasources")
    public openapisdk.models.shared.Datasource[] datasources;
    public GetAllDataSources200ApplicationJsonData withDatasources(openapisdk.models.shared.Datasource[] datasources) {
        this.datasources = datasources;
        return this;
    }
}