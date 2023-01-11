package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostEnterpriseAuthRefreshRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostEnterpriseAuthRefreshRequestBody request;
    public PostEnterpriseAuthRefreshRequest withRequest(PostEnterpriseAuthRefreshRequestBody request) {
        this.request = request;
        return this;
    }
}