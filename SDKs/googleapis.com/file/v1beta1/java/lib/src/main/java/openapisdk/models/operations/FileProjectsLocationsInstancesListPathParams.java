package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileProjectsLocationsInstancesListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FileProjectsLocationsInstancesListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}