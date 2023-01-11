package openapisdk.models.operations;



public class GetAllDiscountsResponse {
    public String contentType;
    public GetAllDiscountsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DiscountResponse[] discountResponses;
    public GetAllDiscountsResponse withDiscountResponses(openapisdk.models.shared.DiscountResponse[] discountResponses) {
        this.discountResponses = discountResponses;
        return this;
    }
    public Long statusCode;
    public GetAllDiscountsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}