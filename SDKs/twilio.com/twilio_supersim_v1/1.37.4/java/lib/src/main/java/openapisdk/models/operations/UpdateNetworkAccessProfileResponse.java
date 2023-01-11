package openapisdk.models.operations;



public class UpdateNetworkAccessProfileResponse {
    public String contentType;
    public UpdateNetworkAccessProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateNetworkAccessProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SupersimV1NetworkAccessProfile supersimV1NetworkAccessProfile;
    public UpdateNetworkAccessProfileResponse withSupersimV1NetworkAccessProfile(openapisdk.models.shared.SupersimV1NetworkAccessProfile supersimV1NetworkAccessProfile) {
        this.supersimV1NetworkAccessProfile = supersimV1NetworkAccessProfile;
        return this;
    }
}