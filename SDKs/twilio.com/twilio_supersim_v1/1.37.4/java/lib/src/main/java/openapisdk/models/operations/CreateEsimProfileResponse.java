package openapisdk.models.operations;



public class CreateEsimProfileResponse {
    public String contentType;
    public CreateEsimProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateEsimProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SupersimV1EsimProfile supersimV1EsimProfile;
    public CreateEsimProfileResponse withSupersimV1EsimProfile(openapisdk.models.shared.SupersimV1EsimProfile supersimV1EsimProfile) {
        this.supersimV1EsimProfile = supersimV1EsimProfile;
        return this;
    }
}