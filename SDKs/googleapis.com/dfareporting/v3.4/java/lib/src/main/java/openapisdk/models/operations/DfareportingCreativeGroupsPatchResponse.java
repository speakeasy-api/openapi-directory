package openapisdk.models.operations;



public class DfareportingCreativeGroupsPatchResponse {
    public String contentType;
    public DfareportingCreativeGroupsPatchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreativeGroup creativeGroup;
    public DfareportingCreativeGroupsPatchResponse withCreativeGroup(openapisdk.models.shared.CreativeGroup creativeGroup) {
        this.creativeGroup = creativeGroup;
        return this;
    }
    public Long statusCode;
    public DfareportingCreativeGroupsPatchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}