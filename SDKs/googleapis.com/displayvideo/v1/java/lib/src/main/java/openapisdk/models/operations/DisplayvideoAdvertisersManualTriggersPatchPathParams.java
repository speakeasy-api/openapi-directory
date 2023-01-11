package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersManualTriggersPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersManualTriggersPatchPathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=triggerId")
    public String triggerId;
    public DisplayvideoAdvertisersManualTriggersPatchPathParams withTriggerId(String triggerId) {
        this.triggerId = triggerId;
        return this;
    }
}