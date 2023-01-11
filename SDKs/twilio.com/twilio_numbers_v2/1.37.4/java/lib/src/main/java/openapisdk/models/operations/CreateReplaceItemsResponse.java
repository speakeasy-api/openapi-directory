package openapisdk.models.operations;



public class CreateReplaceItemsResponse {
    public String contentType;
    public CreateReplaceItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CreateReplaceItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleReplaceItems numbersV2RegulatoryComplianceBundleReplaceItems;
    public CreateReplaceItemsResponse withNumbersV2RegulatoryComplianceBundleReplaceItems(openapisdk.models.shared.NumbersV2RegulatoryComplianceBundleReplaceItems numbersV2RegulatoryComplianceBundleReplaceItems) {
        this.numbersV2RegulatoryComplianceBundleReplaceItems = numbersV2RegulatoryComplianceBundleReplaceItems;
        return this;
    }
}