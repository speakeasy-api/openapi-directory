package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposUpdateStatusCheckProtectionRequest {
    public ReposUpdateStatusCheckProtectionPathParams pathParams;
    public ReposUpdateStatusCheckProtectionRequest withPathParams(ReposUpdateStatusCheckProtectionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ReposUpdateStatusCheckProtectionRequestBody request;
    public ReposUpdateStatusCheckProtectionRequest withRequest(ReposUpdateStatusCheckProtectionRequestBody request) {
        this.request = request;
        return this;
    }
}