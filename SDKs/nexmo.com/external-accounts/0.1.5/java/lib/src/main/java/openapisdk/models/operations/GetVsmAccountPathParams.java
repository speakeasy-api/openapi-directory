package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVsmAccountPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=external_id")
    public String externalId;
    public GetVsmAccountPathParams withExternalId(String externalId) {
        this.externalId = externalId;
        return this;
    }
}