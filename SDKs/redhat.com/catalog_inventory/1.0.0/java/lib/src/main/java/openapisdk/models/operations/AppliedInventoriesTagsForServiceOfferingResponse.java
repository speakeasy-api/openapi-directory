package openapisdk.models.operations;



public class AppliedInventoriesTagsForServiceOfferingResponse {
    public String contentType;
    public AppliedInventoriesTagsForServiceOfferingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AppliedInventoriesTagsForServiceOfferingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Tag[] tags;
    public AppliedInventoriesTagsForServiceOfferingResponse withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}