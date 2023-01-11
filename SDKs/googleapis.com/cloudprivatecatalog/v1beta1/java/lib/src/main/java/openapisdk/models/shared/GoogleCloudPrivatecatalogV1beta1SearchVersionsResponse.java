package openapisdk.models.shared;



/**
 * GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse
 * Response message for PrivateCatalog.SearchVersions.
**/
public class GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse {
    public String nextPageToken;
    public GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    public GoogleCloudPrivatecatalogV1beta1Version[] versions;
    public GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse withVersions(GoogleCloudPrivatecatalogV1beta1Version[] versions) {
        this.versions = versions;
        return this;
    }
}