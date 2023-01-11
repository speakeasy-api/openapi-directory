package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutFirewallsIdRequest {
    public PutFirewallsIdPathParams pathParams;
    public PutFirewallsIdRequest withPathParams(PutFirewallsIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PutFirewallsIdUpdateFirewallRequest request;
    public PutFirewallsIdRequest withRequest(PutFirewallsIdUpdateFirewallRequest request) {
        this.request = request;
        return this;
    }
}