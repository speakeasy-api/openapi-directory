package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkInsightApplicationHealthByTimePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=applicationId")
    public String applicationId;
    public GetNetworkInsightApplicationHealthByTimePathParams withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkInsightApplicationHealthByTimePathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}