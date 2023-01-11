package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetAnArtistsRelatedArtistsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public EndpointGetAnArtistsRelatedArtistsPathParams withId(String id) {
        this.id = id;
        return this;
    }
}