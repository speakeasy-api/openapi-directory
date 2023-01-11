package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileProjectsLocationsOperationsCancelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public FileProjectsLocationsOperationsCancelPathParams withName(String name) {
        this.name = name;
        return this;
    }
}