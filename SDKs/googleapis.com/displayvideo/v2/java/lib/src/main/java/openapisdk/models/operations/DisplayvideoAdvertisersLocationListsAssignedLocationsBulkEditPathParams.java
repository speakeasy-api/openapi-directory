package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditPathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=locationListId")
    public String locationListId;
    public DisplayvideoAdvertisersLocationListsAssignedLocationsBulkEditPathParams withLocationListId(String locationListId) {
        this.locationListId = locationListId;
        return this;
    }
}