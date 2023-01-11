package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostQuoteImageBackgroundRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostQuoteImageBackgroundRequestBody request;
    public PostQuoteImageBackgroundRequest withRequest(PostQuoteImageBackgroundRequestBody request) {
        this.request = request;
        return this;
    }
    public PostQuoteImageBackgroundSecurity security;
    public PostQuoteImageBackgroundRequest withSecurity(PostQuoteImageBackgroundSecurity security) {
        this.security = security;
        return this;
    }
}