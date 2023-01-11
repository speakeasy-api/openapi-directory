package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BigqueryconnectionProjectsLocationsConnectionsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public BigqueryconnectionProjectsLocationsConnectionsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}