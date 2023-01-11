package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileProjectsLocationsInstancesSharesCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FileProjectsLocationsInstancesSharesCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}