package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMatchTimeseriesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Modified-Since")
    public String ifModifiedSince;
    public GetMatchTimeseriesHeaders withIfModifiedSince(String ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
        return this;
    }
}