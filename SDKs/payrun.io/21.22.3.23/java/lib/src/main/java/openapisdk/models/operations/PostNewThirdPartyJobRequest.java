package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNewThirdPartyJobRequest {
    public PostNewThirdPartyJobHeaders headers;
    public PostNewThirdPartyJobRequest withHeaders(PostNewThirdPartyJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ThirdPartyJobInstruction request;
    public PostNewThirdPartyJobRequest withRequest(openapisdk.models.shared.ThirdPartyJobInstruction request) {
        this.request = request;
        return this;
    }
}