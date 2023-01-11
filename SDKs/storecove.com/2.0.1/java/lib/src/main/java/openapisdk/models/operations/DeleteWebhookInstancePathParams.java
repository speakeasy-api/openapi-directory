package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWebhookInstancePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=guid")
    public String guid;
    public DeleteWebhookInstancePathParams withGuid(String guid) {
        this.guid = guid;
        return this;
    }
}