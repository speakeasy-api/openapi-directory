package openapisdk.models.shared;



/**
 * GoogleCloudServicebrokerV1beta1ListCatalogResponse
 * Response message for the `ListCatalog()` method.
**/
public class GoogleCloudServicebrokerV1beta1ListCatalogResponse {
    public String description;
    public GoogleCloudServicebrokerV1beta1ListCatalogResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    public String nextPageToken;
    public GoogleCloudServicebrokerV1beta1ListCatalogResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
    public GoogleCloudServicebrokerV1beta1Service[] services;
    public GoogleCloudServicebrokerV1beta1ListCatalogResponse withServices(GoogleCloudServicebrokerV1beta1Service[] services) {
        this.services = services;
        return this;
    }
}