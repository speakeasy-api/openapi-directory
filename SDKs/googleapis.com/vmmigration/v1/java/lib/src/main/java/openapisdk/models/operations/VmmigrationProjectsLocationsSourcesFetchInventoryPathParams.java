package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VmmigrationProjectsLocationsSourcesFetchInventoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=source")
    public String source;
    public VmmigrationProjectsLocationsSourcesFetchInventoryPathParams withSource(String source) {
        this.source = source;
        return this;
    }
}