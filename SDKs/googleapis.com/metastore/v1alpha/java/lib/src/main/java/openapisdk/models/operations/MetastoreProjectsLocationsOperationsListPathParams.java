package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MetastoreProjectsLocationsOperationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public MetastoreProjectsLocationsOperationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}