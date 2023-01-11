package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListWebhookPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=ServiceSid")
    public String serviceSid;
    public ListWebhookPathParams withServiceSid(String serviceSid) {
        this.serviceSid = serviceSid;
        return this;
    }
}