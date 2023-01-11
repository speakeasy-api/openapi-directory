package openapisdk.models.shared;



/**
 * GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse
 * Response message for PrivateCatalog.SearchCatalogs.
**/
public class GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse {
    public GoogleCloudPrivatecatalogV1beta1Catalog[] catalogs;
    public GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse withCatalogs(GoogleCloudPrivatecatalogV1beta1Catalog[] catalogs) {
        this.catalogs = catalogs;
        return this;
    }
    public String nextPageToken;
    public GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}