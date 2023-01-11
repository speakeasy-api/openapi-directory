package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchProjectsLocationsOperationsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public BatchProjectsLocationsOperationsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}