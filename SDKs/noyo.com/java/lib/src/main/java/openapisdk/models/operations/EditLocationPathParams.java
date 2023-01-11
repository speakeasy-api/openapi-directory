package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditLocationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=group_id")
    public String groupId;
    public EditLocationPathParams withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location_id")
    public String locationId;
    public EditLocationPathParams withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=version")
    public String version;
    public EditLocationPathParams withVersion(String version) {
        this.version = version;
        return this;
    }
}