package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetRecentlyPlayedHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetRecentlyPlayedHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}