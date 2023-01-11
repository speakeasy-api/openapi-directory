package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetMultipleArtistsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetMultipleArtistsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}