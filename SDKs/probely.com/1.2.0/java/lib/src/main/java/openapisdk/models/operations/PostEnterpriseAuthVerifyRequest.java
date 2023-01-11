package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnterpriseAuthVerifyRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostEnterpriseAuthVerifyRequestBody request;
    public PostEnterpriseAuthVerifyRequest withRequest(PostEnterpriseAuthVerifyRequestBody request) {
        this.request = request;
        return this;
    }
}