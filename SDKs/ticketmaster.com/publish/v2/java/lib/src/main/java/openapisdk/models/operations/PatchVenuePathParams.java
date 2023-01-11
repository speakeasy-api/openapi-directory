package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchVenuePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatchVenuePathParams withId(String id) {
        this.id = id;
        return this;
    }
}