package openapisdk.models.operations;



public class PriceOffersResponse {
    public String contentType;
    public PriceOffersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String priceOffers200ApplicationJSONString;
    public PriceOffersResponse withPriceOffers200ApplicationJsonString(String priceOffers200ApplicationJSONString) {
        this.priceOffers200ApplicationJSONString = priceOffers200ApplicationJSONString;
        return this;
    }
    public Long statusCode;
    public PriceOffersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}