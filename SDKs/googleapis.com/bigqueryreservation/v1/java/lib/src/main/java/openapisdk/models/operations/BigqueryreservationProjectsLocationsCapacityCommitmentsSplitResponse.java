package openapisdk.models.operations;



public class BigqueryreservationProjectsLocationsCapacityCommitmentsSplitResponse {
    public String contentType;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsSplitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SplitCapacityCommitmentResponse splitCapacityCommitmentResponse;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsSplitResponse withSplitCapacityCommitmentResponse(openapisdk.models.shared.SplitCapacityCommitmentResponse splitCapacityCommitmentResponse) {
        this.splitCapacityCommitmentResponse = splitCapacityCommitmentResponse;
        return this;
    }
    public Long statusCode;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsSplitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}