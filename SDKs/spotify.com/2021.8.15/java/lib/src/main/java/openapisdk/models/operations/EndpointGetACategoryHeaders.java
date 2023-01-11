package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetACategoryHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetACategoryHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}