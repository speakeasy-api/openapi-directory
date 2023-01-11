package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMessengerAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=external_id")
    public String externalId;
    public DeleteMessengerAccountPathParams withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
}