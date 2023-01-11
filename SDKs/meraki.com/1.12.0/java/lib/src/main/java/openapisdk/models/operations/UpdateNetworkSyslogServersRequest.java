package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSyslogServersRequest {
    public UpdateNetworkSyslogServersPathParams pathParams;
    public UpdateNetworkSyslogServersRequest withPathParams(UpdateNetworkSyslogServersPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkSyslogServersRequestBody request;
    public UpdateNetworkSyslogServersRequest withRequest(UpdateNetworkSyslogServersRequestBody request) {
        this.request = request;
        return this;
    }
}