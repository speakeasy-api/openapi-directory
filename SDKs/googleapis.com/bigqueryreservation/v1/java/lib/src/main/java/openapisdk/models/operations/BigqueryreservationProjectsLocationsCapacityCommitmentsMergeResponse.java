package openapisdk.models.operations;



public class BigqueryreservationProjectsLocationsCapacityCommitmentsMergeResponse {
    public openapisdk.models.shared.CapacityCommitment capacityCommitment;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsMergeResponse withCapacityCommitment(openapisdk.models.shared.CapacityCommitment capacityCommitment) {
        this.capacityCommitment = capacityCommitment;
        return this;
    }
    public String contentType;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsMergeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsMergeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}