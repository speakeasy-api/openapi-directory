package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutTracksTrackIdRequests {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public openapisdk.models.shared.TrackDataRequest trackDataRequest;
    public PutTracksTrackIdRequests withTrackDataRequest(openapisdk.models.shared.TrackDataRequest trackDataRequest) {
        this.trackDataRequest = trackDataRequest;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=multipart/x-www-form-urlencoded")
    public openapisdk.models.shared.TrackDataRequest trackDataRequest1;
    public PutTracksTrackIdRequests withTrackDataRequest1(openapisdk.models.shared.TrackDataRequest trackDataRequest1) {
        this.trackDataRequest1 = trackDataRequest1;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TrackMetadataRequest trackMetadataRequest;
    public PutTracksTrackIdRequests withTrackMetadataRequest(openapisdk.models.shared.TrackMetadataRequest trackMetadataRequest) {
        this.trackMetadataRequest = trackMetadataRequest;
        return this;
    }
}