package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TripsTripDetailsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trackToken")
    public String trackToken;
    public TripsTripDetailsQueryParams withTrackToken(String trackToken) {
        this.trackToken = trackToken;
        return this;
    }
}