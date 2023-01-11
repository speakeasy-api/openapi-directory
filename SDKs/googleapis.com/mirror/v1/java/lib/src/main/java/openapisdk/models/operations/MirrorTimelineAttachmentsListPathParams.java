package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorTimelineAttachmentsListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=itemId")
    public String itemId;
    public MirrorTimelineAttachmentsListPathParams withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
}