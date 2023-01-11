package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StatusQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=msg_id")
    public String msgId;
    public StatusQueryParams withMsgId(String msgId) {
        this.msgId = msgId;
        return this;
    }
}