package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BaremetalsolutionProjectsLocationsVolumesResizeRequest {
    public BaremetalsolutionProjectsLocationsVolumesResizePathParams pathParams;
    public BaremetalsolutionProjectsLocationsVolumesResizeRequest withPathParams(BaremetalsolutionProjectsLocationsVolumesResizePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public BaremetalsolutionProjectsLocationsVolumesResizeQueryParams queryParams;
    public BaremetalsolutionProjectsLocationsVolumesResizeRequest withQueryParams(BaremetalsolutionProjectsLocationsVolumesResizeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ResizeVolumeRequest request;
    public BaremetalsolutionProjectsLocationsVolumesResizeRequest withRequest(openapisdk.models.shared.ResizeVolumeRequest request) {
        this.request = request;
        return this;
    }
    public BaremetalsolutionProjectsLocationsVolumesResizeSecurity security;
    public BaremetalsolutionProjectsLocationsVolumesResizeRequest withSecurity(BaremetalsolutionProjectsLocationsVolumesResizeSecurity security) {
        this.security = security;
        return this;
    }
}