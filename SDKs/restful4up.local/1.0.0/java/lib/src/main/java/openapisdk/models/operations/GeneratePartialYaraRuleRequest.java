package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GeneratePartialYaraRuleRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public Object request;
    public GeneratePartialYaraRuleRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}