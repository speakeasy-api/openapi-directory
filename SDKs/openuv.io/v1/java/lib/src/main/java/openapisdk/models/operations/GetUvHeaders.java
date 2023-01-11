package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUvHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-access-token")
    public String xAccessToken;
    public GetUvHeaders withXAccessToken(String xAccessToken) {
        this.xAccessToken = xAccessToken;
        return this;
    }
}