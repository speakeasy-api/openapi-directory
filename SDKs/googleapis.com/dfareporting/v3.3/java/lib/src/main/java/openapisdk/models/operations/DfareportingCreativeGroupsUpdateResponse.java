package openapisdk.models.operations;



public class DfareportingCreativeGroupsUpdateResponse {
    public String contentType;
    public DfareportingCreativeGroupsUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreativeGroup creativeGroup;
    public DfareportingCreativeGroupsUpdateResponse withCreativeGroup(openapisdk.models.shared.CreativeGroup creativeGroup) {
        this.creativeGroup = creativeGroup;
        return this;
    }
    public Long statusCode;
    public DfareportingCreativeGroupsUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}