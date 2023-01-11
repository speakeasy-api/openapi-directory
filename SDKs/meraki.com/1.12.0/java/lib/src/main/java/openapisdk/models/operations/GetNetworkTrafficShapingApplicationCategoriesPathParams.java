package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkTrafficShapingApplicationCategoriesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkTrafficShapingApplicationCategoriesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}