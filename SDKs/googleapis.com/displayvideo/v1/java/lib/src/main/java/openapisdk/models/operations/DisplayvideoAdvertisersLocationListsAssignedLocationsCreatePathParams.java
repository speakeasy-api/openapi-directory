package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersLocationListsAssignedLocationsCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersLocationListsAssignedLocationsCreatePathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=locationListId")
    public String locationListId;
    public DisplayvideoAdvertisersLocationListsAssignedLocationsCreatePathParams withLocationListId(String locationListId) {
        this.locationListId = locationListId;
        return this;
    }
}