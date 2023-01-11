package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutGeofencesIdRequest {
    public PutGeofencesIdPathParams pathParams;
    public PutGeofencesIdRequest withPathParams(PutGeofencesIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Geofence request;
    public PutGeofencesIdRequest withRequest(openapisdk.models.shared.Geofence request) {
        this.request = request;
        return this;
    }
}