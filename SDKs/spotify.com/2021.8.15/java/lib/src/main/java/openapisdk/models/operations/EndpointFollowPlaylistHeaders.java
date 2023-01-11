package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointFollowPlaylistHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointFollowPlaylistHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Type")
    public String contentType;
    public EndpointFollowPlaylistHeaders withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
}