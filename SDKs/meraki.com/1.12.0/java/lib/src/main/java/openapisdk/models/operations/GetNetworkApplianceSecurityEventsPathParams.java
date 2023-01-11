package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkApplianceSecurityEventsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkApplianceSecurityEventsPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}