package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetAnArtistsTopTracksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public EndpointGetAnArtistsTopTracksPathParams withId(String id) {
        this.id = id;
        return this;
    }
}