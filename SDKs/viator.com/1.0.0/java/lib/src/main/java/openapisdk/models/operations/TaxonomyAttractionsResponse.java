package openapisdk.models.operations;



public class TaxonomyAttractionsResponse {
    public String contentType;
    public TaxonomyAttractionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TaxonomyAttractionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TaxonomyAttractions200ApplicationJson taxonomyAttractions200ApplicationJSONObject;
    public TaxonomyAttractionsResponse withTaxonomyAttractions200ApplicationJsonObject(TaxonomyAttractions200ApplicationJson taxonomyAttractions200ApplicationJSONObject) {
        this.taxonomyAttractions200ApplicationJSONObject = taxonomyAttractions200ApplicationJSONObject;
        return this;
    }
}