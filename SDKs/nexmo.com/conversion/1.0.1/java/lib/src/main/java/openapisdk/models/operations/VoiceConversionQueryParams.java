package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VoiceConversionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=delivered")
    public Object delivered;
    public VoiceConversionQueryParams withDelivered(Object delivered) {
        this.delivered = delivered;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=message-id")
    public String messageId;
    public VoiceConversionQueryParams withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timestamp")
    public String timestamp;
    public VoiceConversionQueryParams withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}