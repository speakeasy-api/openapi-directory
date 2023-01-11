package openapisdk.models.operations;



public class BigqueryreservationProjectsLocationsCapacityCommitmentsListResponse {
    public String contentType;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCapacityCommitmentsResponse listCapacityCommitmentsResponse;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsListResponse withListCapacityCommitmentsResponse(openapisdk.models.shared.ListCapacityCommitmentsResponse listCapacityCommitmentsResponse) {
        this.listCapacityCommitmentsResponse = listCapacityCommitmentsResponse;
        return this;
    }
    public Long statusCode;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}