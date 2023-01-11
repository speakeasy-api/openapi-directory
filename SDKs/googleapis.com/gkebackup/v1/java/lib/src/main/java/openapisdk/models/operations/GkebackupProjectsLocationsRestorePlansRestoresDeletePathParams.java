package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkebackupProjectsLocationsRestorePlansRestoresDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public GkebackupProjectsLocationsRestorePlansRestoresDeletePathParams withName(String name) {
        this.name = name;
        return this;
    }
}