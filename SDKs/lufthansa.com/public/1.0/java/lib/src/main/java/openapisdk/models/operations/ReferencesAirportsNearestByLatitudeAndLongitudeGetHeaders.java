package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReferencesAirportsNearestByLatitudeAndLongitudeGetHeaders {
    @SpeakeasyMetadata("header:style=simple,explode=false,name=Accept")
    public String accept;
    public ReferencesAirportsNearestByLatitudeAndLongitudeGetHeaders withAccept(String accept) {
        this.accept = accept;
        return this;
    }
}