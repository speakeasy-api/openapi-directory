package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMessengerAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=external_id")
    public String externalId;
    public GetMessengerAccountPathParams withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
}