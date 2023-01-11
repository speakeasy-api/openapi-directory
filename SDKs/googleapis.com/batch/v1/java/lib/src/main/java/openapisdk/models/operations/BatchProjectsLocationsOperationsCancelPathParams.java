package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchProjectsLocationsOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public BatchProjectsLocationsOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}