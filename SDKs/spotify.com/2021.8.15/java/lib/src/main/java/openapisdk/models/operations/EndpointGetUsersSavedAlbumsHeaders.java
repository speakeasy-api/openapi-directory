package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetUsersSavedAlbumsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetUsersSavedAlbumsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}