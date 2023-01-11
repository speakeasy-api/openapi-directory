package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetClientClientIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=client_id")
    public String clientId;
    public GetClientClientIdPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
}