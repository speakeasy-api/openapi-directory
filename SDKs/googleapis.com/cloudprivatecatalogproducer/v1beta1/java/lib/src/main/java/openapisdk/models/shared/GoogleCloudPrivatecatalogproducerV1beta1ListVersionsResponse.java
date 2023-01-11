package openapisdk.models.shared;



public class GoogleCloudPrivatecatalogproducerV1beta1ListVersionsResponse {
    public String nextPageToken;
    public GoogleCloudPrivatecatalogproducerV1beta1ListVersionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    public GoogleCloudPrivatecatalogproducerV1beta1Version[] versions;
    public GoogleCloudPrivatecatalogproducerV1beta1ListVersionsResponse withVersions(GoogleCloudPrivatecatalogproducerV1beta1Version[] versions) {
        this.versions = versions;
        return this;
    }
}