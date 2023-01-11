package openapisdk.models.operations;



public class OfferResponse {
    public String contentType;
    public OfferResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Example12 example12;
    public OfferResponse withExample12(openapisdk.models.shared.Example12 example12) {
        this.example12 = example12;
        return this;
    }
    public Long statusCode;
    public OfferResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}