package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventMatchesKeysHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Modified-Since")
    public String ifModifiedSince;
    public GetEventMatchesKeysHeaders withIfModifiedSince(String ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
        return this;
    }
}