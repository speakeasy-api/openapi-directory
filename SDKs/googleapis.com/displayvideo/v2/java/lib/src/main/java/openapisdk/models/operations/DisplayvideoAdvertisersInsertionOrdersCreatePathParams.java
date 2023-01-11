package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersInsertionOrdersCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersInsertionOrdersCreatePathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
}