package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMatchZebraHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Modified-Since")
    public String ifModifiedSince;
    public GetMatchZebraHeaders withIfModifiedSince(String ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
        return this;
    }
}