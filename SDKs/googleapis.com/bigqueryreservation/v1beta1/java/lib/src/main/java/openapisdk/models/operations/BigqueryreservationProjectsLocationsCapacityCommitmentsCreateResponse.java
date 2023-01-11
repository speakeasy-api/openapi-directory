package openapisdk.models.operations;



public class BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse {
    public openapisdk.models.shared.CapacityCommitment capacityCommitment;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse withCapacityCommitment(openapisdk.models.shared.CapacityCommitment capacityCommitment) {
        this.capacityCommitment = capacityCommitment;
        return this;
    }
    public String contentType;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}