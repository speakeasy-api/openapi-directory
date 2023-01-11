package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostApplicationChargeRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostApplicationChargeRequestBody request;
    public PostApplicationChargeRequest withRequest(PostApplicationChargeRequestBody request) {
        this.request = request;
        return this;
    }
    public PostApplicationChargeSecurity security;
    public PostApplicationChargeRequest withSecurity(PostApplicationChargeSecurity security) {
        this.security = security;
        return this;
    }
}