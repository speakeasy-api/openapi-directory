package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointRemoveShowsUserHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointRemoveShowsUserHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}