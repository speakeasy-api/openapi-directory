package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OffersLoungesByLocationGetPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=location")
    public String location;
    public OffersLoungesByLocationGetPathParams withLocation(String location) {
        this.location = location;
        return this;
    }
}