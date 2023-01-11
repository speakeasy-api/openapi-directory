package openapisdk.models.operations;



public class GenomicsWorkersCheckInResponse {
    public openapisdk.models.shared.CheckInResponse checkInResponse;
    public GenomicsWorkersCheckInResponse withCheckInResponse(openapisdk.models.shared.CheckInResponse checkInResponse) {
        this.checkInResponse = checkInResponse;
        return this;
    }
    public String contentType;
    public GenomicsWorkersCheckInResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GenomicsWorkersCheckInResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}