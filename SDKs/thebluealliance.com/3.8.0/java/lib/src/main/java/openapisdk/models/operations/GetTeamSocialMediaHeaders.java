package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTeamSocialMediaHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=If-Modified-Since")
    public String ifModifiedSince;
    public GetTeamSocialMediaHeaders withIfModifiedSince(String ifModifiedSince) {
        this.ifModifiedSince = ifModifiedSince;
        return this;
    }
}