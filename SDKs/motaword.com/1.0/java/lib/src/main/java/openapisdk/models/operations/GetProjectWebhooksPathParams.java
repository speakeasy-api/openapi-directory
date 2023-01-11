package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProjectWebhooksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public GetProjectWebhooksPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}