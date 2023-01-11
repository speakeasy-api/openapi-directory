package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkMerakiAuthUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public CreateNetworkMerakiAuthUserPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}