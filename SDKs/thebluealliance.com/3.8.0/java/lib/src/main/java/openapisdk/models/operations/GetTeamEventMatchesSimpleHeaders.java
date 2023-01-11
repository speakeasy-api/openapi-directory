package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamEventMatchesSimpleHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Modified-Since")
    public String ifModifiedSince;
    public GetTeamEventMatchesSimpleHeaders withIfModifiedSince(String ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
        return this;
    }
}