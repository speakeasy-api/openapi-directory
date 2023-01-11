package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SmsConversionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=delivered")
    public Object delivered;
    public SmsConversionQueryParams withDelivered(Object delivered) {
        this.delivered = delivered;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=message-id")
    public String messageId;
    public SmsConversionQueryParams withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=timestamp")
    public String timestamp;
    public SmsConversionQueryParams withTimestamp(String timestamp) {
        this.timestamp = timestamp;
        return this;
    }
}