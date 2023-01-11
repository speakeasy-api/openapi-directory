package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostLikesPlaylistsPlaylistIdSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public openapisdk.models.shared.SchemeAuthHeader authHeader;
    public PostLikesPlaylistsPlaylistIdSecurity withAuthHeader(openapisdk.models.shared.SchemeAuthHeader authHeader) {
        this.authHeader = authHeader;
        return this;
    }
}