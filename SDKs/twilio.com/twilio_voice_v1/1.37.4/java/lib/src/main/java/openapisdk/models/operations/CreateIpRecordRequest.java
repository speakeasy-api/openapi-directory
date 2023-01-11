package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIpRecordRequest {
    public String serverURL;
    public CreateIpRecordRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateIpRecordCreateIpRecordRequest request;
    public CreateIpRecordRequest withRequest(CreateIpRecordCreateIpRecordRequest request) {
        this.request = request;
        return this;
    }
    public CreateIpRecordSecurity security;
    public CreateIpRecordRequest withSecurity(CreateIpRecordSecurity security) {
        this.security = security;
        return this;
    }
}