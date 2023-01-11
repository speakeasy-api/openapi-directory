package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointCheckUsersSavedTracksHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointCheckUsersSavedTracksHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
}