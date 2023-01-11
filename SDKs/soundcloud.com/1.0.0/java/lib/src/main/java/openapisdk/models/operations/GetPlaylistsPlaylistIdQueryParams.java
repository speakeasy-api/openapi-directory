package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPlaylistsPlaylistIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=false,name=access")
    public openapisdk.models.shared.AccessEnum[] access;
    public GetPlaylistsPlaylistIdQueryParams withAccess(openapisdk.models.shared.AccessEnum[] access) {
        this.access = access;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=secret_token")
    public String secretToken;
    public GetPlaylistsPlaylistIdQueryParams withSecretToken(String secretToken) {
        this.secretToken = secretToken;
        return this;
    }
}