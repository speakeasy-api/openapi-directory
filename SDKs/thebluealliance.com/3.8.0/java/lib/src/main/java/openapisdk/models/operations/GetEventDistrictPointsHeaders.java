package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventDistrictPointsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Modified-Since")
    public String ifModifiedSince;
    public GetEventDistrictPointsHeaders withIfModifiedSince(String ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
        return this;
    }
}