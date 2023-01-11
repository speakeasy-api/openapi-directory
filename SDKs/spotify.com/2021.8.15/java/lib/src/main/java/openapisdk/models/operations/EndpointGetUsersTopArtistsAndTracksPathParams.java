package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetUsersTopArtistsAndTracksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=type")
    public String type;
    public EndpointGetUsersTopArtistsAndTracksPathParams withType(String type) {
        this.type = type;
        return this;
    }
}