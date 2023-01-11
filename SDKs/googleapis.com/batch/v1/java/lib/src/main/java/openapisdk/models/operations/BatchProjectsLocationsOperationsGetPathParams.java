package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchProjectsLocationsOperationsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public BatchProjectsLocationsOperationsGetPathParams withName(String name) {
        this.name = name;
        return this;
    }
}