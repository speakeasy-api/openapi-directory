package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventAlliancesHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Modified-Since")
    public String ifModifiedSince;
    public GetEventAlliancesHeaders withIfModifiedSince(String ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
        return this;
    }
}