package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetForecastHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=x-access-token")
    public String xAccessToken;
    public GetForecastHeaders withXAccessToken(String xAccessToken) {
        this.xAccessToken = xAccessToken;
        return this;
    }
}