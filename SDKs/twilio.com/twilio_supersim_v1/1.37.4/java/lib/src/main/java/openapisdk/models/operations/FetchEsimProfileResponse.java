package openapisdk.models.operations;



public class FetchEsimProfileResponse {
    public String contentType;
    public FetchEsimProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public FetchEsimProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SupersimV1EsimProfile supersimV1EsimProfile;
    public FetchEsimProfileResponse withSupersimV1EsimProfile(openapisdk.models.shared.SupersimV1EsimProfile supersimV1EsimProfile) {
        this.supersimV1EsimProfile = supersimV1EsimProfile;
        return this;
    }
}