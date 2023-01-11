package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoFloodlightGroupsGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=floodlightGroupId")
    public String floodlightGroupId;
    public DisplayvideoFloodlightGroupsGetPathParams withFloodlightGroupId(String floodlightGroupId) {
        this.floodlightGroupId = floodlightGroupId;
        return this;
    }
}