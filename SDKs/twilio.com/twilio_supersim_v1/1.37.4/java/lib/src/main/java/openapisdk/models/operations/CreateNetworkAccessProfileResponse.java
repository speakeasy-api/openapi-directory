package openapisdk.models.operations;



public class CreateNetworkAccessProfileResponse {
    public String contentType;
    public CreateNetworkAccessProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateNetworkAccessProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SupersimV1NetworkAccessProfile supersimV1NetworkAccessProfile;
    public CreateNetworkAccessProfileResponse withSupersimV1NetworkAccessProfile(openapisdk.models.shared.SupersimV1NetworkAccessProfile supersimV1NetworkAccessProfile) {
        this.supersimV1NetworkAccessProfile = supersimV1NetworkAccessProfile;
        return this;
    }
}