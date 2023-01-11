package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudDiscoveryengineV1betaListDocumentsResponse
 * Response message for DocumentService.ListDocuments method.
**/
public class GoogleCloudDiscoveryengineV1betaListDocumentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documents")
    public GoogleCloudDiscoveryengineV1betaDocument[] documents;
    public GoogleCloudDiscoveryengineV1betaListDocumentsResponse withDocuments(GoogleCloudDiscoveryengineV1betaDocument[] documents) {
        this.documents = documents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleCloudDiscoveryengineV1betaListDocumentsResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}