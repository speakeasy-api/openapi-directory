package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEventPredictionsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Modified-Since")
    public String ifModifiedSince;
    public GetEventPredictionsHeaders withIfModifiedSince(String ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
        return this;
    }
}