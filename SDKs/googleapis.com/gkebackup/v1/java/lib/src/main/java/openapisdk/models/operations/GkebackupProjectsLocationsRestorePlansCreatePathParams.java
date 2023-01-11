package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkebackupProjectsLocationsRestorePlansCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=parent")
    public String parent;
    public GkebackupProjectsLocationsRestorePlansCreatePathParams withParent(String parent) {
        this.parent = parent;
        return this;
    }
}