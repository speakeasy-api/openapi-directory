package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProtectionHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-access-token")
    public String xAccessToken;
    public GetProtectionHeaders withXAccessToken(String xAccessToken) {
        this.xAccessToken = xAccessToken;
        return this;
    }
}