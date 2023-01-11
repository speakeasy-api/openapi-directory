package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkebackupProjectsLocationsRestorePlansRestoresPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public GkebackupProjectsLocationsRestorePlansRestoresPatchPathParams withName(String name) {
        this.name = name;
        return this;
    }
}