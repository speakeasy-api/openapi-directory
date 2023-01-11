package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointAddTracksToPlaylistQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=position")
    public Integer position;
    public EndpointAddTracksToPlaylistQueryParams withPosition(Integer position) {
        this.position = position;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uris")
    public String uris;
    public EndpointAddTracksToPlaylistQueryParams withUris(String uris) {
        this.uris = uris;
        return this;
    }
}