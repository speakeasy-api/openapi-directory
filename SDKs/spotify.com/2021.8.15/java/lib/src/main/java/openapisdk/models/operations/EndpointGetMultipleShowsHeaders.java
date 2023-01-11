package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetMultipleShowsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetMultipleShowsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}