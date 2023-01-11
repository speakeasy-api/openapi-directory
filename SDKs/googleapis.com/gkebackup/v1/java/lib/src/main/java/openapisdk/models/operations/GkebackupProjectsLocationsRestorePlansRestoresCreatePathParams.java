package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkebackupProjectsLocationsRestorePlansRestoresCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public GkebackupProjectsLocationsRestorePlansRestoresCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}