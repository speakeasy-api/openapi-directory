package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutWebhooksIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PutWebhooksIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}