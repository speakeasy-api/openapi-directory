package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamEventsByYearSimpleHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Modified-Since")
    public String ifModifiedSince;
    public GetTeamEventsByYearSimpleHeaders withIfModifiedSince(String ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
        return this;
    }
}