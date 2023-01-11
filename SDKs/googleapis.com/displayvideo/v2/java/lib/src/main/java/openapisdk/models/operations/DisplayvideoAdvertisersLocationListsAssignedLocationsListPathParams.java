package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersLocationListsAssignedLocationsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersLocationListsAssignedLocationsListPathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=locationListId")
    public String locationListId;
    public DisplayvideoAdvertisersLocationListsAssignedLocationsListPathParams withLocationListId(String locationListId) {
        this.locationListId = locationListId;
        return this;
    }
}