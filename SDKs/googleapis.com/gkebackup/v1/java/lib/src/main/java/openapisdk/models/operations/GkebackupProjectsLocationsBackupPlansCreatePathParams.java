package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkebackupProjectsLocationsBackupPlansCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public GkebackupProjectsLocationsBackupPlansCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}