package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GkebackupProjectsLocationsDeleteOperationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public GkebackupProjectsLocationsDeleteOperationsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}