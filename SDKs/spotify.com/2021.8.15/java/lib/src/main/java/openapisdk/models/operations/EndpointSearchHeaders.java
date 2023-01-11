package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointSearchHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointSearchHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}