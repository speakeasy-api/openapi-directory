package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTracksTrackIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=secret_token")
    public String secretToken;
    public GetTracksTrackIdQueryParams withSecretToken(String secretToken) {
        this.secretToken = secretToken;
        return this;
    }
}