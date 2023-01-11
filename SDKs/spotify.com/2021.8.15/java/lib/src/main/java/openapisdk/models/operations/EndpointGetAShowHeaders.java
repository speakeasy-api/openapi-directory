package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetAShowHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetAShowHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}