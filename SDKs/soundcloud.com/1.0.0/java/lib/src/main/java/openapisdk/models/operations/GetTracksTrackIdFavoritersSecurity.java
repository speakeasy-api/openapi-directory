package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTracksTrackIdFavoritersSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public openapisdk.models.shared.SchemeClientId clientId;
    public GetTracksTrackIdFavoritersSecurity withClientId(openapisdk.models.shared.SchemeClientId clientId) {
        this.clientId = clientId;
        return this;
    }
}