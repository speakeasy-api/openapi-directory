package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetUsersSavedShowsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetUsersSavedShowsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}