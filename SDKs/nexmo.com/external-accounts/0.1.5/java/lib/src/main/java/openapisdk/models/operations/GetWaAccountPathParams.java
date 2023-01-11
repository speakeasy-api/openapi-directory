package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWaAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=external_id")
    public String externalId;
    public GetWaAccountPathParams withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
}