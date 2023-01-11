package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisplayvideoAdvertisersLineItemsDuplicatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=advertiserId")
    public String advertiserId;
    public DisplayvideoAdvertisersLineItemsDuplicatePathParams withAdvertiserId(String advertiserId) {
        this.advertiserId = advertiserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=lineItemId")
    public String lineItemId;
    public DisplayvideoAdvertisersLineItemsDuplicatePathParams withLineItemId(String lineItemId) {
        this.lineItemId = lineItemId;
        return this;
    }
}