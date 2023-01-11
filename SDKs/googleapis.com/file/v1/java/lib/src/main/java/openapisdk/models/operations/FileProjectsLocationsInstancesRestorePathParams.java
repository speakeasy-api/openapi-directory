package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileProjectsLocationsInstancesRestorePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public FileProjectsLocationsInstancesRestorePathParams withName(String name) {
        this.name = name;
        return this;
    }
}