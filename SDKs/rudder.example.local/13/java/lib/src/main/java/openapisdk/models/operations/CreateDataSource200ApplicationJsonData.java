package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateDataSource200ApplicationJsonData
 * Information about the data sources
**/
public class CreateDataSource200ApplicationJsonData {
    @JsonProperty("datasources")
    public openapisdk.models.shared.Datasource[] datasources;
    public CreateDataSource200ApplicationJsonData withDatasources(openapisdk.models.shared.Datasource[] datasources) {
        this.datasources = datasources;
        return this;
    }
}