package openapisdk.models.shared;



public class GoogleCloudPrivatecatalogproducerV1beta1ListCatalogsResponse {
    public GoogleCloudPrivatecatalogproducerV1beta1Catalog[] catalogs;
    public GoogleCloudPrivatecatalogproducerV1beta1ListCatalogsResponse withCatalogs(GoogleCloudPrivatecatalogproducerV1beta1Catalog[] catalogs) {
        this.catalogs = catalogs;
        return this;
    }
    public String nextPageToken;
    public GoogleCloudPrivatecatalogproducerV1beta1ListCatalogsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}