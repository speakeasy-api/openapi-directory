package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointReorderOrReplacePlaylistsTracksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uris")
    public String uris;
    public EndpointReorderOrReplacePlaylistsTracksQueryParams withUris(String uris) {
        this.uris = uris;
        return this;
    }
}