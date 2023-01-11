package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointCheckUsersSavedShowsHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointCheckUsersSavedShowsHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}