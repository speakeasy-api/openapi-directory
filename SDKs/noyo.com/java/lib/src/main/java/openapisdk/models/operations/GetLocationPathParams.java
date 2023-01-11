package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLocationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public String groupId;
    public GetLocationPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location_id")
    public String locationId;
    public GetLocationPathParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
}