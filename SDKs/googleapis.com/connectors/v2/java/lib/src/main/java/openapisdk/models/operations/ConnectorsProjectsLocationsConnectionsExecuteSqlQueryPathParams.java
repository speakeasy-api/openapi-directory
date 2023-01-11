package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConnectorsProjectsLocationsConnectionsExecuteSqlQueryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=connection")
    public String connection;
    public ConnectorsProjectsLocationsConnectionsExecuteSqlQueryPathParams withConnection(String connection) {
        this.connection = connection;
        return this;
    }
}