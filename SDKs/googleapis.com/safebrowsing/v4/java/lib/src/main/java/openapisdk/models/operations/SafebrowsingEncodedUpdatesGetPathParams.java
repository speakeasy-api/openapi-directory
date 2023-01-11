package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SafebrowsingEncodedUpdatesGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=encodedRequest")
    public String encodedRequest;
    public SafebrowsingEncodedUpdatesGetPathParams withEncodedRequest(String encodedRequest) {
        this.encodedRequest = encodedRequest;
        return this;
    }
}