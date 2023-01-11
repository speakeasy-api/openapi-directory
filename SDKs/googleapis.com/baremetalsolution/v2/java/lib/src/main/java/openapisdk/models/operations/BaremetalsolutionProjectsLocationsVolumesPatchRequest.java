package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsVolumesPatchRequest {
    public BaremetalsolutionProjectsLocationsVolumesPatchPathParams pathParams;
    public BaremetalsolutionProjectsLocationsVolumesPatchRequest withPathParams(BaremetalsolutionProjectsLocationsVolumesPatchPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BaremetalsolutionProjectsLocationsVolumesPatchQueryParams queryParams;
    public BaremetalsolutionProjectsLocationsVolumesPatchRequest withQueryParams(BaremetalsolutionProjectsLocationsVolumesPatchQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.VolumeInput request;
    public BaremetalsolutionProjectsLocationsVolumesPatchRequest withRequest(openapisdk.models.shared.VolumeInput request) {
        this.request = request;
        return this;
    }
    public BaremetalsolutionProjectsLocationsVolumesPatchSecurity security;
    public BaremetalsolutionProjectsLocationsVolumesPatchRequest withSecurity(BaremetalsolutionProjectsLocationsVolumesPatchSecurity security) {
        this.security = security;
        return this;
    }
}