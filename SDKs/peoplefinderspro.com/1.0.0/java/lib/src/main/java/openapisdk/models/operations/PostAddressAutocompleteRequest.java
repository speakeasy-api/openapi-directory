package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddressAutocompleteRequest {
    public PostAddressAutocompleteHeaders headers;
    public PostAddressAutocompleteRequest withHeaders(PostAddressAutocompleteHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public PostAddressAutocompleteRequestBody request;
    public PostAddressAutocompleteRequest withRequest(PostAddressAutocompleteRequestBody request) {
        this.request = request;
        return this;
    }
}