package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointAddToQueueHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointAddToQueueHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}