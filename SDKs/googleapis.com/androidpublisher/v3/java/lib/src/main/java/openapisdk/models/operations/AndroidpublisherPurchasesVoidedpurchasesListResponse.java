package openapisdk.models.operations;



public class AndroidpublisherPurchasesVoidedpurchasesListResponse {
    public String contentType;
    public AndroidpublisherPurchasesVoidedpurchasesListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AndroidpublisherPurchasesVoidedpurchasesListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VoidedPurchasesListResponse voidedPurchasesListResponse;
    public AndroidpublisherPurchasesVoidedpurchasesListResponse withVoidedPurchasesListResponse(openapisdk.models.shared.VoidedPurchasesListResponse voidedPurchasesListResponse) {
        this.voidedPurchasesListResponse = voidedPurchasesListResponse;
        return this;
    }
}