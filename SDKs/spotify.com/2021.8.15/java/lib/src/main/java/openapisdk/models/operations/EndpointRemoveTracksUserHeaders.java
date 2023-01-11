package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointRemoveTracksUserHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointRemoveTracksUserHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Type")
    public String contentType;
    public EndpointRemoveTracksUserHeaders withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
}