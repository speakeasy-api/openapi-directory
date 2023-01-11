package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointUploadCustomPlaylistCoverHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Authorization")
    public String authorization;
    public EndpointUploadCustomPlaylistCoverHeaders withAuthorization(String authorization) {
        this.authorization = authorization;
        return this;
    }
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Content-Type")
    public String contentType;
    public EndpointUploadCustomPlaylistCoverHeaders withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
}