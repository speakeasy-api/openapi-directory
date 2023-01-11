package openapisdk.models.operations;



public class TaxonomyCategoriesResponse {
    public String contentType;
    public TaxonomyCategoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TaxonomyCategoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public TaxonomyCategories200ApplicationJson taxonomyCategories200ApplicationJSONObject;
    public TaxonomyCategoriesResponse withTaxonomyCategories200ApplicationJsonObject(TaxonomyCategories200ApplicationJson taxonomyCategories200ApplicationJSONObject) {
        this.taxonomyCategories200ApplicationJSONObject = taxonomyCategories200ApplicationJSONObject;
        return this;
    }
}