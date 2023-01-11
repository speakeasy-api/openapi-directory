package openapisdk.models.operations;



public class TaxonomyDestinationsResponse {
    public String contentType;
    public TaxonomyDestinationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TaxonomyDestinationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TaxonomyDestinations200ApplicationJson taxonomyDestinations200ApplicationJSONObject;
    public TaxonomyDestinationsResponse withTaxonomyDestinations200ApplicationJsonObject(TaxonomyDestinations200ApplicationJson taxonomyDestinations200ApplicationJSONObject) {
        this.taxonomyDestinations200ApplicationJSONObject = taxonomyDestinations200ApplicationJSONObject;
        return this;
    }
}