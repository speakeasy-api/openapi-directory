package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateIpRecordRequest {
    public String serverURL;
    public UpdateIpRecordRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateIpRecordPathParams pathParams;
    public UpdateIpRecordRequest withPathParams(UpdateIpRecordPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateIpRecordUpdateIpRecordRequest request;
    public UpdateIpRecordRequest withRequest(UpdateIpRecordUpdateIpRecordRequest request) {
        this.request = request;
        return this;
    }
    public UpdateIpRecordSecurity security;
    public UpdateIpRecordRequest withSecurity(UpdateIpRecordSecurity security) {
        this.security = security;
        return this;
    }
}