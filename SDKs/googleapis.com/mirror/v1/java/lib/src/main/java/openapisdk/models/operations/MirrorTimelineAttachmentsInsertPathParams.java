package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorTimelineAttachmentsInsertPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=itemId")
    public String itemId;
    public MirrorTimelineAttachmentsInsertPathParams withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
}