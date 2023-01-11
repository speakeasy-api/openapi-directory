package openapisdk.models.shared;



public class GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse {
    public String nextPageToken;
    public GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    public GoogleCloudPrivatecatalogproducerV1beta1Product[] products;
    public GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse withProducts(GoogleCloudPrivatecatalogproducerV1beta1Product[] products) {
        this.products = products;
        return this;
    }
}