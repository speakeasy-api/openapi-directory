package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkApplianceContentFilteringCategoriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkApplianceContentFilteringCategoriesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}