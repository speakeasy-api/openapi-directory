package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDistrictRankingsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Modified-Since")
    public String ifModifiedSince;
    public GetDistrictRankingsHeaders withIfModifiedSince(String ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
        return this;
    }
}