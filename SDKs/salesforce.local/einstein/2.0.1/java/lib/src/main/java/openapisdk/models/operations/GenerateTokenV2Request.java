package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GenerateTokenV2Request {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public GenerateTokenV2RequestBody request;
    public GenerateTokenV2Request withRequest(GenerateTokenV2RequestBody request) {
        this.request = request;
        return this;
    }
}