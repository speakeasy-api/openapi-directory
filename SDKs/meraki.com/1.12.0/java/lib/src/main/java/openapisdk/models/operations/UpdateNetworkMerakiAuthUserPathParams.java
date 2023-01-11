package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkMerakiAuthUserPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=merakiAuthUserId")
    public String merakiAuthUserId;
    public UpdateNetworkMerakiAuthUserPathParams withMerakiAuthUserId(String merakiAuthUserId) {
        this.merakiAuthUserId = merakiAuthUserId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkMerakiAuthUserPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}