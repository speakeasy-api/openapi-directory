package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersManualTriggersGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersManualTriggersGetPathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=triggerId")
    public String triggerId;
    public DisplayvideoAdvertisersManualTriggersGetPathParams withTriggerId(String triggerId) {
        this.triggerId = triggerId;
        return this;
    }
}