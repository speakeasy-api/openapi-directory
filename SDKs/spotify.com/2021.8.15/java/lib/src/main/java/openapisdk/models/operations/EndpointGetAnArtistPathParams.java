package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetAnArtistPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public EndpointGetAnArtistPathParams withId(String id) {
        this.id = id;
        return this;
    }
}