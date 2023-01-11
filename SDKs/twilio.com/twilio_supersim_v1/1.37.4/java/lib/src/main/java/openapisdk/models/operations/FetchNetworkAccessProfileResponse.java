package openapisdk.models.operations;



public class FetchNetworkAccessProfileResponse {
    public String contentType;
    public FetchNetworkAccessProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchNetworkAccessProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SupersimV1NetworkAccessProfile supersimV1NetworkAccessProfile;
    public FetchNetworkAccessProfileResponse withSupersimV1NetworkAccessProfile(openapisdk.models.shared.SupersimV1NetworkAccessProfile supersimV1NetworkAccessProfile) {
        this.supersimV1NetworkAccessProfile = supersimV1NetworkAccessProfile;
        return this;
    }
}