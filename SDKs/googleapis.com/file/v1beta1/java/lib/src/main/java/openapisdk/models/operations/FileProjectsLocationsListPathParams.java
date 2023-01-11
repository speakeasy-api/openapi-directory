package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileProjectsLocationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public FileProjectsLocationsListPathParams withName(String name) {
        this.name = name;
        return this;
    }
}