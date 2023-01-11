package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersCreativesPatchPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersCreativesPatchPathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=creativeId")
    public String creativeId;
    public DisplayvideoAdvertisersCreativesPatchPathParams withCreativeId(String creativeId) {
        this.creativeId = creativeId;
        return this;
    }
}