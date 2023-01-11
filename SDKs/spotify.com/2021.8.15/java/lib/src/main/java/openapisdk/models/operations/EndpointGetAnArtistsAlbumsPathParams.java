package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetAnArtistsAlbumsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public EndpointGetAnArtistsAlbumsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}