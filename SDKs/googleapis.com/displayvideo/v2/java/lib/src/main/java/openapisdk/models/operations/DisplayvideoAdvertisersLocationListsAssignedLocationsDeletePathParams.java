package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersLocationListsAssignedLocationsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersLocationListsAssignedLocationsDeletePathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=assignedLocationId")
    public String assignedLocationId;
    public DisplayvideoAdvertisersLocationListsAssignedLocationsDeletePathParams withAssignedLocationId(String assignedLocationId) {
        this.assignedLocationId = assignedLocationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=locationListId")
    public String locationListId;
    public DisplayvideoAdvertisersLocationListsAssignedLocationsDeletePathParams withLocationListId(String locationListId) {
        this.locationListId = locationListId;
        return this;
    }
}