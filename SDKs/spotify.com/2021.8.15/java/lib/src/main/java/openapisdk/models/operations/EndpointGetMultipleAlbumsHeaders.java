package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetMultipleAlbumsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetMultipleAlbumsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}