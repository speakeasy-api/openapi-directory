package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchWebhooksIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatchWebhooksIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}