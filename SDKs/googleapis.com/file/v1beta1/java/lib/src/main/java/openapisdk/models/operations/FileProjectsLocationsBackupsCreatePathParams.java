package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FileProjectsLocationsBackupsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public FileProjectsLocationsBackupsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}