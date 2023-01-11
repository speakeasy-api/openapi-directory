package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMessengerAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=external_id")
    public String externalId;
    public UpdateMessengerAccountPathParams withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
}