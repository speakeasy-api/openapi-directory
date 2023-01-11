package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetAvailableMarketsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointGetAvailableMarketsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}