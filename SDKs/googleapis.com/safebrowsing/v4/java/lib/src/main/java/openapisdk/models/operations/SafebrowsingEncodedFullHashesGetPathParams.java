package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SafebrowsingEncodedFullHashesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=encodedRequest")
    public String encodedRequest;
    public SafebrowsingEncodedFullHashesGetPathParams withEncodedRequest(String encodedRequest) {
        this.encodedRequest = encodedRequest;
        return this;
    }
}