package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWebhooksIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteWebhooksIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}