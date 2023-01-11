package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileProjectsLocationsOperationsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public FileProjectsLocationsOperationsDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}