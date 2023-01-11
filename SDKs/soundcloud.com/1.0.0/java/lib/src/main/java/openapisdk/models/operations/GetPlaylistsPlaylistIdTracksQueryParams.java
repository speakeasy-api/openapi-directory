package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPlaylistsPlaylistIdTracksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=access")
    public openapisdk.models.shared.AccessEnum[] access;
    public GetPlaylistsPlaylistIdTracksQueryParams withAccess(openapisdk.models.shared.AccessEnum[] access) {
        this.access = access;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=linked_partitioning")
    public Boolean linkedPartitioning;
    public GetPlaylistsPlaylistIdTracksQueryParams withLinkedPartitioning(Boolean linkedPartitioning) {
        this.linkedPartitioning = linkedPartitioning;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=secret_token")
    public String secretToken;
    public GetPlaylistsPlaylistIdTracksQueryParams withSecretToken(String secretToken) {
        this.secretToken = secretToken;
        return this;
    }
}