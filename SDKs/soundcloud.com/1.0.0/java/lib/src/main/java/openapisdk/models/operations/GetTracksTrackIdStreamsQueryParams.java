package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTracksTrackIdStreamsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=secret_token")
    public String secretToken;
    public GetTracksTrackIdStreamsQueryParams withSecretToken(String secretToken) {
        this.secretToken = secretToken;
        return this;
    }
}