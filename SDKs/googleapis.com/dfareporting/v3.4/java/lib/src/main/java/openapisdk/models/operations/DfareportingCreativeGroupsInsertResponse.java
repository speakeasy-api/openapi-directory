package openapisdk.models.operations;



public class DfareportingCreativeGroupsInsertResponse {
    public String contentType;
    public DfareportingCreativeGroupsInsertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreativeGroup creativeGroup;
    public DfareportingCreativeGroupsInsertResponse withCreativeGroup(openapisdk.models.shared.CreativeGroup creativeGroup) {
        this.creativeGroup = creativeGroup;
        return this;
    }
    public Long statusCode;
    public DfareportingCreativeGroupsInsertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}