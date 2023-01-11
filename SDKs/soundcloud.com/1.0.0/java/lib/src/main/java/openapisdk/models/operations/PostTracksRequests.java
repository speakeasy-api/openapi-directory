package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTracksRequests {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public openapisdk.models.shared.TrackDataRequest trackDataRequest;
    public PostTracksRequests withTrackDataRequest(openapisdk.models.shared.TrackDataRequest trackDataRequest) {
        this.trackDataRequest = trackDataRequest;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/x-www-form-urlencoded")
    public openapisdk.models.shared.TrackDataRequest trackDataRequest1;
    public PostTracksRequests withTrackDataRequest1(openapisdk.models.shared.TrackDataRequest trackDataRequest1) {
        this.trackDataRequest1 = trackDataRequest1;
        return this;
    }
}