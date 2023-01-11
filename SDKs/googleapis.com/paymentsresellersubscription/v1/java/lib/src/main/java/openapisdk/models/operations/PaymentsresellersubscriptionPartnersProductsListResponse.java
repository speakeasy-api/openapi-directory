package openapisdk.models.operations;



public class PaymentsresellersubscriptionPartnersProductsListResponse {
    public String contentType;
    public PaymentsresellersubscriptionPartnersProductsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse googleCloudPaymentsResellerSubscriptionV1ListProductsResponse;
    public PaymentsresellersubscriptionPartnersProductsListResponse withGoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse(openapisdk.models.shared.GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse googleCloudPaymentsResellerSubscriptionV1ListProductsResponse) {
        this.googleCloudPaymentsResellerSubscriptionV1ListProductsResponse = googleCloudPaymentsResellerSubscriptionV1ListProductsResponse;
        return this;
    }
    public Long statusCode;
    public PaymentsresellersubscriptionPartnersProductsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}