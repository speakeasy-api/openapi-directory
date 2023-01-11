package openapisdk.models.shared;



public class GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse {
    public GoogleCloudPrivatecatalogproducerV1beta1Association[] associations;
    public GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse withAssociations(GoogleCloudPrivatecatalogproducerV1beta1Association[] associations) {
        this.associations = associations;
        return this;
    }
    public String nextPageToken;
    public GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}