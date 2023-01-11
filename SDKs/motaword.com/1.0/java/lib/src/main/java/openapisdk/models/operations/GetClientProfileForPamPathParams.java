package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetClientProfileForPamPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=clientId")
    public Long clientId;
    public GetClientProfileForPamPathParams withClientId(Long clientId) {
        this.clientId = clientId;
        return this;
    }
}