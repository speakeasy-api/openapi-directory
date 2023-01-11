package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamYearsParticipatedHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Modified-Since")
    public String ifModifiedSince;
    public GetTeamYearsParticipatedHeaders withIfModifiedSince(String ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
        return this;
    }
}