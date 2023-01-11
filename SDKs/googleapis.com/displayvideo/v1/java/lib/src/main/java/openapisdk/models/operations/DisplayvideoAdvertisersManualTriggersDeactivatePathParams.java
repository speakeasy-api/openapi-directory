package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersManualTriggersDeactivatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersManualTriggersDeactivatePathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=triggerId")
    public String triggerId;
    public DisplayvideoAdvertisersManualTriggersDeactivatePathParams withTriggerId(String triggerId) {
        this.triggerId = triggerId;
        return this;
    }
}