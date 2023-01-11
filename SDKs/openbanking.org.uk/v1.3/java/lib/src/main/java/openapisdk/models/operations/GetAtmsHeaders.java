package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAtmsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Modified-Since")
    public String ifModifiedSince;
    public GetAtmsHeaders withIfModifiedSince(String ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public GetAtmsHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}