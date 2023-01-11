package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBusinessCurrentAccountsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Modified-Since")
    public String ifModifiedSince;
    public GetBusinessCurrentAccountsHeaders withIfModifiedSince(String ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-None-Match")
    public String ifNoneMatch;
    public GetBusinessCurrentAccountsHeaders withIfNoneMatch(String ifNoneMatch) {
        this.ifNoneMatch = ifNoneMatch;
        return this;
    }
}