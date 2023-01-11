package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventTeamsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Modified-Since")
    public String ifModifiedSince;
    public GetEventTeamsHeaders withIfModifiedSince(String ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
        return this;
    }
}