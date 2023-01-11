package openapisdk.models.operations;



public class GenomicsProjectsWorkersCheckInResponse {
    public openapisdk.models.shared.CheckInResponse checkInResponse;
    public GenomicsProjectsWorkersCheckInResponse withCheckInResponse(openapisdk.models.shared.CheckInResponse checkInResponse) {
        this.checkInResponse = checkInResponse;
        return this;
    }
    public String contentType;
    public GenomicsProjectsWorkersCheckInResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GenomicsProjectsWorkersCheckInResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}