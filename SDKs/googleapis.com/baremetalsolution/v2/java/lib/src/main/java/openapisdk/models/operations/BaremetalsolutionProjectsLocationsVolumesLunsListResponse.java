package openapisdk.models.operations;



public class BaremetalsolutionProjectsLocationsVolumesLunsListResponse {
    public String contentType;
    public BaremetalsolutionProjectsLocationsVolumesLunsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListLunsResponse listLunsResponse;
    public BaremetalsolutionProjectsLocationsVolumesLunsListResponse withListLunsResponse(openapisdk.models.shared.ListLunsResponse listLunsResponse) {
        this.listLunsResponse = listLunsResponse;
        return this;
    }
    public Long statusCode;
    public BaremetalsolutionProjectsLocationsVolumesLunsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}