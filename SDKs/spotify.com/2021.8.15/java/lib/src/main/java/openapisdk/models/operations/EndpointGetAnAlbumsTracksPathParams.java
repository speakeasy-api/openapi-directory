package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EndpointGetAnAlbumsTracksPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public EndpointGetAnAlbumsTracksPathParams withId(String id) {
        this.id = id;
        return this;
    }
}