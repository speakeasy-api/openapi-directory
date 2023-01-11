package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnterpriseAuthRevokeRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostEnterpriseAuthRevokeRequestBody request;
    public PostEnterpriseAuthRevokeRequest withRequest(PostEnterpriseAuthRevokeRequestBody request) {
        this.request = request;
        return this;
    }
}