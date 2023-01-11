package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGeofencesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Geofence request;
    public PostGeofencesRequest withRequest(openapisdk.models.shared.Geofence request) {
        this.request = request;
        return this;
    }
}