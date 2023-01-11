package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TrackJourneyEventRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TrackJourneyEventRequestBody request;
    public TrackJourneyEventRequest withRequest(TrackJourneyEventRequestBody request) {
        this.request = request;
        return this;
    }
}