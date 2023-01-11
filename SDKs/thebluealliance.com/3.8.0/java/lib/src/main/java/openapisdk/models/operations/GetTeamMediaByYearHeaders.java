package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamMediaByYearHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Modified-Since")
    public String ifModifiedSince;
    public GetTeamMediaByYearHeaders withIfModifiedSince(String ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
        return this;
    }
}