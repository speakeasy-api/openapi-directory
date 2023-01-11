package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MirrorTimelineAttachmentsDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=attachmentId")
    public String attachmentId;
    public MirrorTimelineAttachmentsDeletePathParams withAttachmentId(String attachmentId) {
        this.attachmentId = attachmentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=itemId")
    public String itemId;
    public MirrorTimelineAttachmentsDeletePathParams withItemId(String itemId) {
        this.itemId = itemId;
        return this;
    }
}