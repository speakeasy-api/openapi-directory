package openapisdk.models.operations;



public class DfareportingCreativeGroupsGetResponse {
    public String contentType;
    public DfareportingCreativeGroupsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreativeGroup creativeGroup;
    public DfareportingCreativeGroupsGetResponse withCreativeGroup(openapisdk.models.shared.CreativeGroup creativeGroup) {
        this.creativeGroup = creativeGroup;
        return this;
    }
    public Long statusCode;
    public DfareportingCreativeGroupsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}