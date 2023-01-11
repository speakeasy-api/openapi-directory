package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkebackupProjectsLocationsBackupPlansListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public GkebackupProjectsLocationsBackupPlansListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}