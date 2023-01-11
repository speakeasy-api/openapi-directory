package openapisdk.models.shared;



/**
 * GoogleCloudPrivatecatalogV1beta1SearchProductsResponse
 * Response message for PrivateCatalog.SearchProducts.
**/
public class GoogleCloudPrivatecatalogV1beta1SearchProductsResponse {
    public String nextPageToken;
    public GoogleCloudPrivatecatalogV1beta1SearchProductsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    public GoogleCloudPrivatecatalogV1beta1Product[] products;
    public GoogleCloudPrivatecatalogV1beta1SearchProductsResponse withProducts(GoogleCloudPrivatecatalogV1beta1Product[] products) {
        this.products = products;
        return this;
    }
}