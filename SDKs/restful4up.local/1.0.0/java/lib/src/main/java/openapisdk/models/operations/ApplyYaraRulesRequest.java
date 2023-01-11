package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApplyYaraRulesRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public Object request;
    public ApplyYaraRulesRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}