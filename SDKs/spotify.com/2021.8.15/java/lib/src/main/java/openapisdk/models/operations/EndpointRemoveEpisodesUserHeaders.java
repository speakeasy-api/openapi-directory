package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointRemoveEpisodesUserHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointRemoveEpisodesUserHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Type")
    public String contentType;
    public EndpointRemoveEpisodesUserHeaders withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
}