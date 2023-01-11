package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileProjectsLocationsInstancesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FileProjectsLocationsInstancesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}