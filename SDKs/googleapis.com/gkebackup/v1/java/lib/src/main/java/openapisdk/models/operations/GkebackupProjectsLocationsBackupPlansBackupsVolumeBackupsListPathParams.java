package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListPathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}