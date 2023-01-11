package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetUsersSavedTracksHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetUsersSavedTracksHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}