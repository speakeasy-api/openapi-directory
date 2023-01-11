package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamMatchesByYearHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Modified-Since")
    public String ifModifiedSince;
    public GetTeamMatchesByYearHeaders withIfModifiedSince(String ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
        return this;
    }
}