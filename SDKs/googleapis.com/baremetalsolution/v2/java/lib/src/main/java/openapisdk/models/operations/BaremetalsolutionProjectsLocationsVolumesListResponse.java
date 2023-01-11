package openapisdk.models.operations;



public class BaremetalsolutionProjectsLocationsVolumesListResponse {
    public String contentType;
    public BaremetalsolutionProjectsLocationsVolumesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListVolumesResponse listVolumesResponse;
    public BaremetalsolutionProjectsLocationsVolumesListResponse withListVolumesResponse(openapisdk.models.shared.ListVolumesResponse listVolumesResponse) {
        this.listVolumesResponse = listVolumesResponse;
        return this;
    }
    public Long statusCode;
    public BaremetalsolutionProjectsLocationsVolumesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}