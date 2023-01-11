package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointCheckUsersSavedAlbumsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointCheckUsersSavedAlbumsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}