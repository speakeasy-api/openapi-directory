package openapisdk.models.operations;



public class CloudkmsProjectsLocationsGenerateRandomBytesResponse {
    public String contentType;
    public CloudkmsProjectsLocationsGenerateRandomBytesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenerateRandomBytesResponse generateRandomBytesResponse;
    public CloudkmsProjectsLocationsGenerateRandomBytesResponse withGenerateRandomBytesResponse(openapisdk.models.shared.GenerateRandomBytesResponse generateRandomBytesResponse) {
        this.generateRandomBytesResponse = generateRandomBytesResponse;
        return this;
    }
    public Long statusCode;
    public CloudkmsProjectsLocationsGenerateRandomBytesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}