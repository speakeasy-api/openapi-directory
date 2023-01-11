package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkebackupProjectsLocationsBackupPlansBackupsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public GkebackupProjectsLocationsBackupPlansBackupsCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}